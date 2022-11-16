# Sample WebDriver Automation Solution.

This test demonstrates the use of WebdriverIO in normal business situations.

This repo contains all the test code as well as setup instructions for the tools and for the code.

## Background

Within the QuestionPaper directory there is a PDF which contains 3 questions to answer using an automation solution.

I have chosen in this repository to attempt this using WebDriverIO and a custom Page Object Model architecture.

The full questions are containined within the PDF in the QuestionPaper directory, but they are:

### Scenario 1: Write an end-to-end test to fill in and submit a form

The form can be found here https://demo.seleniumeasy.com/input-form-demo.html

1. Please fill in all the fields in the form and submit it
2. You can choose what data to enter into the form

This question is quite easy due to the presence of "name" attributes on the elements.

### Scenario Two

Write a test that does the following

1. Navigate to https://demo.seleniumeasy.com/table-sort-search-demo.html
2. Search for all users in San Francisco
3. Read the age of all the employees in the grid
4. Verify that the average age of all the employees in that office is "46"
   1. If, when you come to write your test, the average age of all employees is not 46, that’s fine, just make sure that the test fails.

This test is slightly more difficult as the table cells do not contain any easily targetable attributes.

### Scenario Three

Write a test that does the following

1. Navigate to https://demo.seleniumeasy.com/table-sort-search-demo.html
2. Read the salaries of all the software engineers at the company
3. Verify that the highest salary for a software engineer is $206,850/y

This test is slightly more difficult as the table cells do not contain any easily targetable attributes.

### Installation instructions

Needs:
Java JDK (correctly setup with JAVA_HOME configured and added to the path as %JAVA_HOME%\bin)

nodejs (https://nodejs.org/en/) - **NOTE** Node v14 / v12 will work, the latest node has a breaking change which I need to identify first.

VSCode (Not required, but recomended due to multiple command prompts needed)

There has been a security update (on windows) which is preventing scripts running - if using visual studio code, then follow the instructions below to avoid getting any errors:

**NOTE** This has been configured to run with the Chrome browser only.

Open VS code:

File -> Preferences -> Settings and in the search bar write "automation".
After that, by looking your operating system enter "edit in settings.json". (which will be windows)
Finally, add the following b/n the braces:
`"terminal.integrated.shellArgs.windows": ["-ExecutionPolicy", "Bypass"]`

## To run

install all pre-reqs with **npm install** from the root

Open one terminal and run **node_modules\\.bin\\webdriver-manager update**

Once the update has completed, then run **node_modules\\.bin\\webdriver-manager start**
**ensure that you see 'INFO [SeleniumServer.boot] - Selenium Server is up and running on port 4444' in the terminal**

Now open a new terminal and then run **npx wdio wdio.conf.js**

(as a side note, my way of working is shown in the image - for reference)

To run a suite (defined in the wdio.config.js file)
**npx wdio wdio.conf.js --suite <suiteName>**

### To generate JSDoc documenation

**.\node_modules\\.bin\jsdoc -c .\jsdoc.json**

The resulting files will appear in the "jsdoc" folder

### To generate a report

**node_modules\\.bin\\allure generate --clean**
This will generate the report into allure-report

Clean out allure-results if you want a clean report (with nothing from previous runs added.)

## Notes

### Sample Report

In the folder "sample-allure-report" there is an output from the allure report.  *NOTE* that due to security, if you view the report you will likely just see "loading" on the screen.  To avoid this, using chrome, open a command prompt (windows only) and enter `start chrome --allow-file-access-from-files` and then drag in the index file.  When this is served via a webserver (or Jenkins) this is not required.
   
### JSDocs

These have been generated and are present in the jsdoc folder.

### Jenkins

There is a sample jenkins pipeline in the "pipeline" folder. This pipeline would need tweaked depending on the host OS where Jenkins was running. It will checkout the code, run the tests and create the report (There are additional requirements for allure to be installed on the Jenkins box.)
  
### Final Thoughts

There are a number of things I would improve if this were production. Firstly, I would like proper identifiers added to the search box on the table page. While I have been able to interact with this, it's not a particularly good way of doing it.

On the same page in both tests, the code to interact with the table is messy. Again, some identifiers on the table could make the code a lot better (especially the one with the age where I had to use a nasty count and reset - this is not production ready, but just an example of how to do it.)
