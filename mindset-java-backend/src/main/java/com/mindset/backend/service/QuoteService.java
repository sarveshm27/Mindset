package com.mindset.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindset.backend.entity.Quote;
import com.mindset.backend.entity.User;
import com.mindset.backend.repository.QuoteRepository;
import com.mindset.backend.repository.UserRepository;

@Service
public class QuoteService {

    @Autowired
    private QuoteRepository quoteRepository;

    @Autowired
    private UserRepository userRepository;

    public Quote createQuote(String email, String text) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Quote quote = new Quote();
        quote.setText(text);
        quote.setUser(user);

        return quoteRepository.save(quote);
    }

    public List<Quote> getQuotes(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return quoteRepository.findByUserIdOrderByCreatedAtDesc(user.getId());
    }
}
