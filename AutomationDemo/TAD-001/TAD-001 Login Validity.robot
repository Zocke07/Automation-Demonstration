*** Settings ***
Documentation    A test suite with a single test for valid login.
...
...              This test has a workflow that is created using keywords in
...              the imported resource file.
Resource    ./Keywords/TestCases.txt

Suite Setup       Open Browser To Login Page
Suite Teardown    Close Browser

*** Test Cases ***
Valid Login
    [Tags]    TCD-001
    Input Username    demo
    Input Password    mode
    Submit Credentials
    Welcome Page Should Be Open
    [Teardown]    Click Logout Button

Invalid Login
    [Tags]    TCD-002
    Verify Login With Invalid Username Fails
    Verify Login With Invalid Password Fails
    Verify Login With Invalid Username And Password Fails
    [Teardown]    Click Try Again Button