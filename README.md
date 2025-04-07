# ✈️ Airline Check-In System (Microservices Architecture)

This project simulates a simple **Airline Check-In System** using **Spring Boot microservices**. It includes:

- ✅ Check-In Service  
- 💺 Seat & Baggage Selection Service  
- 💳 Payment Service

Each service is independently deployable and interacts via REST APIs.

---

## 💡 Features

- Check in using name and flight number  
- View seat map and select a seat  
- Add baggage by weight and type  
- Add selected seat/baggage to cart  
- Make payment and receive confirmation  

---

## 🧭 Access services in the browser

- 🔹 [Check-In Service](http://localhost:8001/checkin.html)  
- 🔹 [Seat & Baggage Service](http://localhost:8000/seat-baggage.html)  
- 🔹 [Payment Service](http://localhost:8080/payment.html)  

---

## 🚀 How to Run

1. Clone each service into a separate folder or repo.
2. Make sure each one has a different port set in `application.properties`.
3. Run each service using:

   ```bash
   ./mvnw spring-boot:run

   ```
4. Open the HTML pages in your browser as listed above.

## Sceenshots

![Image](https://github.com/user-attachments/assets/a902d5f6-7d97-4b93-89a0-8f3855ecf4f4)

![Image](https://github.com/user-attachments/assets/5ea59595-6ed7-4aeb-a109-9849932f5565)

![Image](https://github.com/user-attachments/assets/70e4b21e-ea54-4f0f-a8d0-a9e52d5be403)

![Image](https://github.com/user-attachments/assets/fe989fd2-9d31-4645-90a2-215bc013a839)

