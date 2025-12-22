package com.mindset.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mindset.backend.entity.Quote;
import com.mindset.backend.service.QuoteService;

import lombok.Data;

@RestController
@RequestMapping("/quotes")
public class QuoteController {

    @Data
    public static class QuoteRequest {
        private String text;
    }

    @Autowired
    private QuoteService quoteService;

    @GetMapping
    public List<Quote> getQuotes(@AuthenticationPrincipal UserDetails userDetails) {
        return quoteService.getQuotes(userDetails.getUsername());
    }

    @PostMapping
    public Quote createQuote(@AuthenticationPrincipal UserDetails userDetails, @RequestBody QuoteRequest request) {
        return quoteService.createQuote(userDetails.getUsername(), request.getText());
    }
}
