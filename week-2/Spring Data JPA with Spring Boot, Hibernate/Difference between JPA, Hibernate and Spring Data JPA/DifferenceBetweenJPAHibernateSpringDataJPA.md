# Hands-on 4
# Difference between JPA, Hibernate and Spring Data JPA

## Java Persistence API (JPA)

- JPA stands for Java Persistence API.
- It is a specification (JSR 338) for persisting, reading, and managing data from Java objects.
- JPA itself does not provide any implementation.
- It defines interfaces and standards for ORM.
- Hibernate is one of the implementations of JPA.

### Features
- Standard API for persistence.
- Database independent.
- Defines annotations like:
  - @Entity
  - @Table
  - @Id
  - @Column

---

## Hibernate

- Hibernate is an ORM (Object Relational Mapping) framework.
- It implements the JPA specification.
- Hibernate converts Java objects into database tables.
- It provides Session and Transaction management.

### Features
- Implements JPA.
- Supports HQL (Hibernate Query Language).
- Handles caching.
- Provides transaction management.

### Example

```java
public Integer addEmployee(Employee employee){

    Session session = factory.openSession();
    Transaction tx = null;
    Integer employeeID = null;

    try{
        tx = session.beginTransaction();
        employeeID =
            (Integer)session.save(employee);
        tx.commit();
    }
    catch(Exception e){
        if(tx!=null)
            tx.rollback();
    }
    finally{
        session.close();
    }

    return employeeID;
}
```

---

## Spring Data JPA

- Spring Data JPA is a framework built on top of JPA.
- It does not provide JPA implementation.
- It reduces boilerplate code.
- It internally uses JPA providers like Hibernate.
- It automatically manages transactions.

### Features

- Reduces coding effort.
- Provides CRUD operations.
- Supports automatic query generation.
- Integrates with Spring Framework.

### Example

```java
public interface EmployeeRepository
        extends JpaRepository<Employee,Integer>{

}
```

```java
@Autowired
private EmployeeRepository employeeRepository;

@Transactional
public void addEmployee(Employee employee){
    employeeRepository.save(employee);
}
```

---

## Comparison Table

| Feature | JPA | Hibernate | Spring Data JPA |
|---------|-----|-----------|-----------------|
| Type | Specification | ORM Framework | Framework |
| Implementation | No | Yes | No |
| Boilerplate Code | High | Medium | Very Low |
| Transaction Management | No | Yes | Yes |
| CRUD Operations | Manual | Manual | Automatic |
| Query Support | JPQL | HQL + JPQL | Derived Queries |

---

## Conclusion

- JPA is a specification.
- Hibernate is an implementation of JPA.
- Spring Data JPA is an abstraction layer over JPA providers like Hibernate that reduces boilerplate code and simplifies database operations.

## Reference Links

- https://dzone.com/articles/what-is-the-difference-between-hibernate-and-sprin-1
- https://www.javaworld.com/article/3379043/what-is-jpa-introduction-to-the-java-persistence-api.html