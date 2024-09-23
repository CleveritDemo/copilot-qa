Feature: Google Search

  Scenario: Search for Microsoft Copilot
    Given I open Google page
    When I search for "Microsoft Copilot | IA de Microsoft"
    Then the title should contain "Microsoft Copilot | IA de Microsoft"