/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /*This test suite contains RSS Feeds definitions */

    describe('RSS Feeds', function() {
        /* This test checks whether the allFeeds variable has been defined 
         * and whether it is not empty. */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test checks whether each feed has a URL defined
         * and whether the URL is not empty.*/

        it('have a defined url which is not empty', function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0); 
            })
            
         })

        /* This test checks whether each feed has a name defined
         * and whether the name is not empty.*/

        it('have a defined name which is not empty', function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0); 
            })
            
         })
    });


    /* This test suite tests the menu */

    describe('The menu', function(){
        /* This test checks whether the menu element is hidden by default. */

        it('is hidden', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        })

        /* This test chekcs whether the menu changes visibility when the menu icon is clicked. */

        it('toggles visibility when icon is clicked', function(){
            //  ensures the menu display when clicked
            $('a.menu-icon-link').trigger('click'); 
            expect($('body').hasClass('menu-hidden')).toBe(false);

            //  ensures the menu hides when clicked again
            $('a.menu-icon-link').trigger('click'); 
            expect($('body').hasClass('menu-hidden')).toBe(true);
        })

    })

        
    /* This test suite tests the Initial Entries */

    describe('Initial Entries', function(){
        /* This test checks whether there is at least
         * a single .entry element within the .feed container.*/

        // wait for asynchronous calls to finish
        beforeEach(function(done){
            loadFeed(0, done);
        });

        it('have at least a single element', function(){
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    /* This test suite tests New Feed Selection */
    
    describe('New Feed Selection', function(){

        var initialFeed;

        /*This test checks whether the content updates when a new feed is loaded */

        // wait for asynchronous calls to finish
        beforeEach(function(done){
            loadFeed(0, function(){
                initialFeed = $('.feed').html();
                loadFeed(1, done);
            });
        });

        // ensures the content chanfes
        it('updates the content', function(){
            expect($('.feed').html()).not.toBe(initialFeed);
        });
    });  



        
}());
