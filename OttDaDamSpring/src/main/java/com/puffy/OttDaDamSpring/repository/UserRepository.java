package com.puffy.OttDaDamSpring.repository;


import com.puffy.OttDaDamSpring.entity.odd_data;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<odd_data, Long>{
}
