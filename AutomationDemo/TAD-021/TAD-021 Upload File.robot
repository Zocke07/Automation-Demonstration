*** Settings ***
Resource    ../Resources/Core.txt
Resource    Keywords/TestCases.txt

Suite Setup    Run Keywords    Open Browser To Login Page
...                     AND    Login As User
Suite Teardown    Close Browser

*** Test Cases ***
Verify that the user can upload file
    [Tags]    TCD-021
    Click File Upload Button
    Choose File To Upload
    Click Upload Button
    Verify File Is Uploaded Successfully
    [Teardown]    Run Keywords    Click Back To Welcome Button
    ...                    AND    Click Logout Button