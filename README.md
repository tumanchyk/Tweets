# Tweets app

An application where you can find and follow your favorite heroes from the superhero universe.

Tools: React Toolkits, Axios, Mockapi.io, Vite

This application has 2 pages which I implemented using BrowserRouter.

When you open the "/tweets" page, you can see a collection of 3 cards with users information. Then when you click on the "Load More" button, 3 new cards will appear.
Pagination is implemented by mokeapi.oi's ability to return the required number of cards.

The cards include a button that opens and unsubscribes a user and shows how the number of followers changes.

I try to make the site user-friendly, I make sure that your selections are saved and after reloading the page or returning to the program again, you can see your latest changes. I decided to add the users you subscribed to in localStorage and display them every time the page is visited.
