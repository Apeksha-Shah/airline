package com.airline.checkin_service.model;

public class Seat {
    private String seatNumber;
    private boolean available;

    public Seat(String seatNumber, boolean available) {
        this.seatNumber = seatNumber;
        this.available = available;
    }

    public String getSeatNumber() {
        return seatNumber;
    }

    public void setSeatNumber(String seatNumber) {
        this.seatNumber = seatNumber;
    }

    public boolean isAvailable() {
        return available;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }
}
