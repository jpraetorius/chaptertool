chaptertool
===========

Simple HTML Singlepage/Javascript Application to generate chapterfiles in podlove, auphonic and shownotes format.


Test it
-------

You can give the Tool a Test-drive here: http://jpraetorius.github.io/chaptertool/index.html


Rationale
---------

This simple app is thought as helper for people who want chapterfiles in their podcasts without to much hassle in setting up tooling to produce those. 
It is built as a simple HTML Page to record Events in your show. Whenever something noticeable happens (i.e. a new Chapter starts) – simply press the button on the page and get  new Entry with the timecode.
All Event-Entries are created locally, so you have no additional roundtrip times over the Network.

When you're done with recording Chapters, fill in some details (e.g. a short title) and then decide, which format you want.
Currently supported are:

 * [Auphonic Chaptermarks](https://auphonic.com/api-docs/simple_api.html#adding-chapter-marks)
 * [Podlove Simple Chapters](http://podlove.org/simple-chapters/)
 * [Open Shownotes Format](https://github.com/shownotes/OpenShownotesFormat)

On selection the file is generated and sent back as simple text (or XML), for you to save locally. You can save the same listing in different formats, if you want or need to.


Libraries
---------

The Chaptertool is based on these fine Libraries:

 * [JQuery](https://jquery.com/)
 * [Handlebars](http://handlebarsjs.com/)
 * [FileSaver.js](https://github.com/eligrey/FileSaver.js/)
 * [Bootstrap](http://getboostrap.com)
 * [XDate](http://arshaw.com/xdate/)

