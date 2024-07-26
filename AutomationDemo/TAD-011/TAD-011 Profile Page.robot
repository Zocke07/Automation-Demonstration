*** Settings ***
Resource    ../Resources/Core.txt
Resource    Keywords/TestCases.txt

Suite Setup    Run Keywords    Open Browser To Login Page
...                     AND    Login As User
Suite Teardown    Close Browser

*** Test Cases ***
Verify that the user can update their profile details
    [Tags]    TCD-011
    Click User Profile Button
    Input User Profile
    Click Update Profile Button
    Verify Profile Is Updated
    [Teardown]    Run Keywords    Click Back To Welcome Button
    ...                    AND    Click Logout Button