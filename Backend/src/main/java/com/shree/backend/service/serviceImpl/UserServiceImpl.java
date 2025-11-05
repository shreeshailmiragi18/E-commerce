package com.shree.backend.service.serviceImpl;

import com.shree.backend.config.JwtProvider;
import com.shree.backend.entity.User;
import com.shree.backend.exception.UserException;
import com.shree.backend.repository.UserRepository;
import com.shree.backend.service.UserService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;
    private JwtProvider jwtProvider;

    public UserServiceImpl(UserRepository userRepository, JwtProvider jwtProvider) {
        this.userRepository = userRepository;
        this.jwtProvider = jwtProvider;
    }

    @Override
    public User findUserById(Long userId) throws UserException {

        Optional<User> user = userRepository.findById(userId);
        if(user.isPresent()){
            return user.get();
        }
       throw new UserException("User not found : "+ userId);
    }

    @Override
    public User findUserByJwt(String jwt) throws UserException {

        String email = jwtProvider.getEmailFromToken(jwt);

        User user = userRepository.findByEmail(email);
        if(user == null){
            throw new UserException("User not found : "+ email);

        }
        return user;
    }
}
