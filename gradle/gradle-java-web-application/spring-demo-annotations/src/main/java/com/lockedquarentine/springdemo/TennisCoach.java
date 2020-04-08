package com.lockedquarentine.springdemo;

import org.springframework.stereotype.Component;

@Component("TennisCoach") // doesnt matter, just adding because it's what he is doing - default is class name with lower case
public class TennisCoach implements Coach {
    @Override
    public String getDailyWorkout() {
        return "I dont care what youre doing today :D go back to study";
    }
}
