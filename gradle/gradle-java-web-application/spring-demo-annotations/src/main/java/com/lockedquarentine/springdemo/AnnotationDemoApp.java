package com.lockedquarentine.springdemo;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class AnnotationDemoApp {

    public static void main(String[] args) {
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // If ID not defined in TennisCoach, use default method only with Coach.class parameter
        Coach theCoach = context.getBean("TennisCoach", Coach.class);

        System.out.println(theCoach.getDailyWorkout());

        context.close();
    }
}
