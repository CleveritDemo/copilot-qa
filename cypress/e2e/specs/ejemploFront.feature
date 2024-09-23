Feature: CleverIT Homepage Navigation

  Scenario: Visit CleverIT homepage and verify elements
    Given I visit the CleverIT homepage
    Then the homepage title should include "El talento excepcional se une a nuestra tecnología disruptiva"
    Then there should be a link to the Services page