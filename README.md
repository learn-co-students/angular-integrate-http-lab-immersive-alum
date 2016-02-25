# Integrate $http into CRUD service

## Objectives

- Use a backend API to fetch data
- Create public Service methods to match API intention

## Instructions

Let's create a service to query a stubbed API. To do this, we need `stubby` as a command line program.

We can do this with

```bash
sudo npm install -g stubby
```

Then, run `stubby -d config.yml` in your command line.

Now, we've got our mocked backend running. This has two endpoints under the url `/rest/user` - we can issue both GET and POST requests to it.

Create a service that queries this endpoint, and display the results in the view.

The service should also have a method to POST to this endpoint, checking the `status` property on the response.
