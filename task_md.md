# Trella frontend technical task

_Thank you for taking the time to complete the technical task_

_Feel free to reach out to `tarek@trella.app` and ask if you have any questions_

## Submission

- Result should be submitted through a **private repository** through any source 
  control services (GitHub, GitLab, ...etc). 

- Give access to that repository to `tarek@trella.app` and `pierre@trella.app`

- Once you are finished with the task, please send an email to `tarek@trella.app` 
  and `uzi.bhistoli@trella.app`

## Details

![UI](https://trella-assets.s3.eu-west-1.amazonaws.com/Frontend+task+UI.png)

The task is to create an app that shows and filter a list of shipments.

- On the left, a filter card that contains 2 fields: commodity and vehicle type
- On the right, a list of cards showing shipments details

## Acceptance criteria

- On the first load, all shipments should be loaded
- Selecting an item from the filter should re-fetch shipments results
- Changing the filter shouldn't automatically re-fetch, instead it should debounce 
  and waits `1s` before triggering a re-fetch
- You will find below a list of static shipments list. You should mock `fetch`
  using the mock data below

## Requirements

- You are free to use any framework you like (React is an A+)
- Unit tests should cover those scenarios
  - Fetch all shipments on the first load
  - Trigger a re-fetch when changing the filter
  - Match content in card with the shipment object itself

## What we are looking for

- Clean and scalable architecture
- Separation of concerns
- Error handling
- Code readability

## Mock data

You can get mock data from [here](https://trella-assets.s3.eu-west-1.amazonaws.com/Frontend+task+data.json)