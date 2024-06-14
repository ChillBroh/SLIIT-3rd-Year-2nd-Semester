package com.example.demo.model;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
public class UserRepository {
    private List<User> users = new ArrayList<>();
    private long nextId = 1;
    public List<User> findAllUsers() {
        return users;
    }
    public Optional<User> findUserById(Long id) {
        return users.stream()
            .filter(user -> user.getId().equals(id))
            .findFirst(); }
    public User saveUser(User user) {
        if (user.getId() == null) {
          user.setId(nextId++); }
        else {
          users.removeIf(existingUser -> existingUser.getId().equals(user.getId())); }
          users.add(user);
        return user;
    }
    public void deleteUserById(Long id) {
        users.removeIf(user -> user.getId().equals(id));
    }
}
