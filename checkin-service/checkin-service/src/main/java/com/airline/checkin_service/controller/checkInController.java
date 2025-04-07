package com.airline.checkin_service.controller;

import com.airline.checkin_service.model.Passenger;
import com.airline.checkin_service.model.Seat;
import com.airline.checkin_service.service.SeatService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/checkin")
@CrossOrigin(origins = "*")
public class checkInController {

    private final SeatService seatService;

    public checkInController(SeatService seatService) {
        this.seatService = seatService;
    }

    @PostMapping
    public String checkInPassenger(@RequestBody Passenger passenger) {
        return "Check-in started for: " + passenger.getName() + " (Flight: " + passenger.getFlightNumber() + ")";
    }

    @GetMapping("/seats")
    public List<Seat> getSeats() {
        return seatService.getDefaultSeatMap();
    }

}
