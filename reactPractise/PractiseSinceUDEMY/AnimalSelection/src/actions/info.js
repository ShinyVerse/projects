//Action and Action Creators

Changing our state is what actions and action creators are for.

Lifecycle of an action in a redux application:
>direct or indirect event triggered by a user
>>Action creator: function that returns an object.
>>>That object is then automatically sent to all reducers
>>>>Reducers choose (depending on the action) to return a different piece of state
depending on what the action is.
>>>>>That newly returned piece of state then gets piped into the application state
>>>>>>The application state then gets pumped back into our react app, causing all our
components to re-render.
