-- Exercise 1 : Control Structures

SET SERVEROUTPUT ON;

---------------------------------------------------------
-- Scenario 1
-- Apply 1% discount to loan interest rates
-- for customers above 60 years old
---------------------------------------------------------

BEGIN
    FOR c IN (
        SELECT CustomerID
        FROM Customers
        WHERE Age > 60
    )
    LOOP
        UPDATE Loans
        SET InterestRate = InterestRate - 1
        WHERE CustomerID = c.CustomerID;
    END LOOP;

    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Loan interest rates updated.');
END;
/

---------------------------------------------------------
-- Scenario 2
-- Promote customers to VIP
---------------------------------------------------------

BEGIN
    FOR c IN (
        SELECT CustomerID
        FROM Customers
        WHERE Balance > 10000
    )
    LOOP
        UPDATE Customers
        SET IsVIP = 'TRUE'
        WHERE CustomerID = c.CustomerID;
    END LOOP;

    COMMIT;
    DBMS_OUTPUT.PUT_LINE('VIP customers updated.');
END;
/

---------------------------------------------------------
-- Scenario 3
-- Loan Due Reminder
---------------------------------------------------------

BEGIN
    FOR l IN (
        SELECT CustomerID, LoanID, DueDate
        FROM Loans
        WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Customer ' || l.CustomerID ||
            ' has Loan ' || l.LoanID ||
            ' due on ' || l.DueDate
        );
    END LOOP;
END;
/