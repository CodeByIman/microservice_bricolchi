#!/bin/bash

# Run annonce-service
echo "Starting annonce-service..."
(cd annonce-service && ./mvnw spring-boot:run) &

# Run api-gateway
echo "Starting api-gateway..."
(cd api-gateway && ./mvnw spring-boot:run) &

# Run auth-service-main
echo "Starting auth-service-main..."
(cd auth-service-main && ./mvnw spring-boot:run) &

# Run booking-service
echo "Starting booking-service..."
(cd booking-service && ./mvnw spring-boot:run) &

# Run geo-service
echo "Starting geo-service..."
(cd geo-service && ./mvnw spring-boot:run) &

# Run suivie-service-main
echo "Starting suivie-service-main..."
(cd suivie-service-main && ./mvnw spring-boot:run) &


echo "All services started."
wait
