# [WORK IN PROGRESS] :e-mail: Mailified - Secure E-Mail Delivery with Proof

Mailified is a new project to verify the delivery and handling of E-Mails. It does so by providing a easy-to-use and also self hostable service that listens to E-Mails and writes their time stamps onto a blockchain (currently, the IOTA Blockchain is being used).

## How it works

Imagine, you have to send an important document to the authorities. This can be done by printing every page and sending it via postal services. But you could also send an E-Mail with an attachment. With Mailified, you can send this mail to the authorities, listing your individual Mailified-E-Mail Adress as CC or BCC. Mailified processes your E-Mail by calculating a hash of its contents and attachments and deletes it right away so that no sensitive data is stored at the service. These hashes are then recorded in a Blockchain of choice (IOTA is chosen for now because it's free and easy to handle).
If there is a problem with your E-Mail or the authorities argue, that they didn't receive any mails, you could easily verify that you have sent the mail to the corrent recipient by comparing the hash values at their specific time stamp.

## Progress

As of now (May 2022), I have a lot on my plate and just finished the conceptual phase. I also did some experimenting with an Express Backend and NodeJS scripts for E-Mail handling and communicating with the new IOTA v2 Mainnet. Next, I will deploy a simple react app and connect the backend with the frontend through a custom API.

:white_check_mark: Concept done
:white_check_mark: First prototyping done
:black_square_button: Proper Repository Design
:black_square_button: Frontend development
:black_square_button: Custom API development