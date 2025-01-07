// cytat

const cytaty = [
    "„Nie ma książki tak złej, żeby nie miała czegoś dobrego.” – Miguel de Cervantes",
    "„Czytanie to najpiękniejsza zabawa, jaką sobie ludzkość wymyśliła.” – Wisława Szymborska",
    "„Książki są lustrem: widzisz w nich tylko to, co już masz w sobie.” – Carlos Ruiz Zafón",
    "„Czytanie to dla umysłu tym, czym ćwiczenia fizyczne dla ciała.” – Joseph Addison",
    "„Dom bez książek jest jak ciało bez duszy.” – Cyceron",
    "„Jak dobrze mieć przyjaciela.” – A.A. Milne, *Kubuś Puchatek*",
    "„Jesteś odważniejszy, niż wierzysz, silniejszy, niż się wydajesz, i mądrzejszy, niż myślisz.” – A.A. Milne, *Kubuś Puchatek*",
    "„Nie ma sensu wracać do wczoraj, bo byłam wtedy inną osobą.” – Lewis Carroll, *Alicja w Krainie Czarów*",
    "„Czasem zdarza się dzień, kiedy nie dzieje się nic szczególnego, i właśnie taki dzień jest dniem wyjątkowym.” – A.A. Milne, *Kubuś Puchatek*",
    "„Jeśli nie wiesz, dokąd idziesz, każda droga cię tam zaprowadzi.” – Lewis Carroll, *Alicja w Krainie Czarów*",
    "„Tylko ci, którzy próbują absurdów, mogą osiągnąć niemożliwe.” – Lewis Carroll, *Alicja w Krainie Czarów*",
    "„Marzenia się spełniają, tylko trzeba je wypowiedzieć na głos.” – Tove Jansson, *Muminki*",
    "„Przyjaciele są jak gwiazdy. Nie zawsze ich widzisz, ale wiesz, że są.” – Antoine de Saint-Exupéry, *Mały Książę*",
    "„Najważniejsze jest niewidoczne dla oczu.” – Antoine de Saint-Exupéry, *Mały Książę*",
    "„Aby stać się dorosłym, trzeba najpierw nauczyć się być dzieckiem.” – Astrid Lindgren, *Dzieci z Bullerbyn*"
];


const losowyIndeks = Math.floor(Math.random() * cytaty.length);
const losowyCytat = cytaty[losowyIndeks];


document.getElementById("quote").innerText = losowyCytat;
