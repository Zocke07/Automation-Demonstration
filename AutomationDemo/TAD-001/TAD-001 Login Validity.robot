*** Settings ***
Resource    ../Resources/Core.txt
Resource    Keywords/TestCases.txt

Suite Setup       Open Browser To Login Page
Suite Teardown    Close Browser

*** Test Cases ***
Valid Login
    [Tags]    TCD-001
    Login With Credentials    demo    mode
    Verify Welcome Page Is Visible
    [Teardown]    Click Logout Button

Invalid Login
    [Tags]    TCD-002
    Verify Login With Invalid Username Fails
    Verify Login With Invalid Password Fails
    Verify Login With Invalid Username And Password Fails
    [Teardown]    Click Try Again Button