package com.airline.checkin_service.model;

public class Passenger {
    private String name;
    private String flightNumber;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFlightNumber() {
        return flightNumber;
    }

    public void setFlightNumber(String flightNumber) {
        this.flightNumber = flightNumber;
    }

    public Passenger(String name, String flightNumber) {
        this.name = name;
        this.flightNumber = flightNumber;
    }
}
