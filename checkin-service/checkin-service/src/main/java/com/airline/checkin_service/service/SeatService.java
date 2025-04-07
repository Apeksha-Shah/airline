package com.airline.checkin_service.service;

import com.airline.checkin_service.model.Seat;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class SeatService {
    public List<Seat> getDefaultSeatMap() {
        List<Seat> seats = new ArrayList<>();
        seats.add(new Seat("1A", true));
        seats.add(new Seat("1B", false));
        seats.add(new Seat("1C", true));
        seats.add(new Seat("2A", true));
        return seats;
    }
}
