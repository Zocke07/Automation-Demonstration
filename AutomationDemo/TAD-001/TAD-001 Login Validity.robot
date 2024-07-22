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

Invalid Login
    [Tags]    TCD-002
    Login With Invalid Credentials Should Fail    invalid    ${VALID PASSWORD}
    Login With Invalid Credentials Should Fail    ${VALID USER}    invalid
    Login With Invalid Credentials Should Fail    invalid    whatever
    Login With Invalid Credentials Should Fail    ${EMPTY}    ${VALID PASSWORD}
    Login With Invalid Credentials Should Fail    ${VALID USER}    ${EMPTY}
    Login With Invalid Credentials Should Fail    ${EMPTY}    ${EMPTY}