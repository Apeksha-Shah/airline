package com.airline.payment_service.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin(origins = "*")
public class PaymentController {

    private boolean paymentCompleted = false;

    @GetMapping("/payment")
    public String paymentPage() {
        return "payment";
    }

    @PostMapping("/pay")
    @ResponseBody
    public String processPayment(@RequestParam double amount) {
        paymentCompleted = true;
        return "Payment of ₹" + amount + " successful.";
    }

    @GetMapping("/confirmation")
    @ResponseBody
    public String showConfirmation() {
        if (paymentCompleted) {
            return "✅ Check-in completed. Enjoy your flight!";
        } else {
            return "❌ Payment not completed.";
        }
    }
}
