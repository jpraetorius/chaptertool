chaptertool
===========

Simple Sinatra and JQuery Application to generate chapterfiles in podlove, auphonic and shownotes format

This simple app is thought as helper for people who want chapterfiles in their podcasts. 
The main part is recording events while recording, which is done with some simple Javascript, so no
network roundtrips or other latencies occur – simply click a button, when a new Chapter starts.

In a second step Fill in some details for your chapters (a short title) and then decide, which format you want.
Currently supported are:

 * [Auphonic Chaptermarks](https://auphonic.com/api-docs/simple_api.html#adding-chapter-marks)
 * [Podlove Simple Chapters](http://podlove.org/simple-chapters/)
 * [Open Shownotes Format](https://github.com/shownotes/OpenShownotesFormat)

On selection the file is generated and sent back as simple text (or XML), for you to save locally. 

Currently that is a one step process, which means you have to hit `back` to go back to the form and will start with a
fresh page then, so multiple formats are currently not possible.
