const hamzaisms = [
  "Sup noobs!",
  "Yo. I am Hamsa",
  "This is boring",
  "I'm bouncing",
  "Later noobs",
  "This AI sucks!",
  "Blah blah Django blah",
  "Yo. Is this react?",
  "JavaScript is for noobs",
  "Why am I talking to myself?",
  "Do you even Python bruh?",
  "Guess I won't see your projects...noobs",
  "I have more important things to do",
  "I have some stuff I gotta take care of",
  "Laysh ti*67ak m7md?",
  "I will destroy you",
  "You guys should be thankful. You guys are welcome",
  "Random interesting fact about Rakan: he's a noob",
  "Haha. Noobs",
  "*dabs annoyingly*",
  "My favorite person is Darth Tyrion",
  "You can tell that’s not my code because I would never use camel casing in Python!",
  "Hello @channel, \ntomorrow we’re gonna start the Django project.",
  "Anytime bro",
  "Hello everyone, \nWho would like to do a movie night after class tomorrow?",
  "MISHAAL",
  "Come back to class @channel",
  "@channel class everyone"
];

export default function getRandomMessage() {
  return hamzaisms[Math.floor(Math.random() * hamzaisms.length)];
}
