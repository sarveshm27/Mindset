package com.mindset.backend.repository;

import com.mindset.backend.entity.Quote;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuoteRepository extends JpaRepository<Quote, String> {
    List<Quote> findByUserIdOrderByCreatedAtDesc(String userId);
}
