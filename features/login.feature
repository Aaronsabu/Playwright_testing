Feature: E-commerce validation

  @e-commerce_validation
  Scenario: Placing order
    Given Login to e-commerce application with "standard_user"  and "secret_sauce"
    When Add "Sauce Labs Backpack" to cart 
    Then Verify "Sauce Labs Backpack" in cart page 
    When Place the order
    Then Verify "Thank you for your order!" is displaying

