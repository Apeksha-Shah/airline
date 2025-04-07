package com.airline.seat_baggage_service.controller;

import com.airline.seat_baggage_service.model.Seat;
import com.airline.seat_baggage_service.model.Baggage;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@CrossOrigin(origins = "*") // To allow frontend JS requests
public class SeatBaggageController {

    private final Map<String, Seat> seatMap = new LinkedHashMap<>();
    private final List<Baggage> cartBaggage = new ArrayList<>();

    public SeatBaggageController() {
        for (int i = 1; i <= 6; i++) {
            seatMap.put("A" + i, new Seat("A" + i, false));
        }
    }

    @PostMapping("/select-seat")
    public String selectSeat(@RequestParam String seatNumber) {
        Seat seat = seatMap.get(seatNumber);
        if (seat != null && !seat.isBooked()) {
            seat.setBooked(true);
            return "Seat " + seatNumber + " added to cart.";
        }
        return "Seat not available.";
    }

    @PostMapping("/add-baggage")
    public String addBaggage(@RequestParam int weight, @RequestParam String type) {
        cartBaggage.add(new Baggage(weight, type));
        return "Baggage added: " + weight + "kg - " + type;
    }

    @GetMapping("/seats")
    public Collection<Seat> getSeats() {
        return seatMap.values();
    }

    @GetMapping("/baggage-list")
    public List<Baggage> getBaggage() {
        return cartBaggage;
    }
}
