package com.shree.backend.service;

import com.shree.backend.entity.User;
import com.shree.backend.exception.UserException;
import jdk.jshell.spi.ExecutionControl;

public interface UserService {
    public User findUserById(Long userId) throws UserException;

    public User findUserByJwt(String jwt) throws UserException;
}
