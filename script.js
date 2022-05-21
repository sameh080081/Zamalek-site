const hamburger = document.querySelector('.icon');
const close = document.getElementById('close-menu');
const menu = document.querySelector('.burger');
const links = Array.from(document.querySelectorAll('.burger a'));
menu.style.display = 'none';
const candidateContainer = document.querySelector('.candidate-cards');

hamburger.addEventListener('click', () => {
    menu.style.display = 'block';
});

close.addEventListener('click', () => {
    menu.style.display = 'none';
});

links.forEach((link) => {
  link.addEventListener('click', () => {
      menu.style.display = 'none';
  });
});

const candidates = [
  {
    name: 'Mortada Mansour',
    photo: './images/candidate1.png',
    profession: 'Lawyer',
    description:
      'Egyptian lawyer who serves as president of Zamalek SC since 2014. Mansour announced his intention on 6 April 2014 to pursue the presidency in the 2014 Egyptian presidential election',
  },
  {
    name: 'Kamal Darwesh',
    photo: './images/candidate2.png',
    profession: '[Former handball players]',
    description:
      'president of Zamalek Club , took over his presidency from 1996 to 2001 , and was re-elected for a second term from 2001 to 2005 , one of the symbols of handball in Zamalek club, where he led Zamalek hand to sweeping championships during the seventies and early eighties in what was known With the golden generation of the hand of Zamalek.',
  },
  {
    name: 'Mamdoh Abbas',
    photo: './images/candidate3.png',
    profession:
      'ُEconomist , graduated from faculty of economy',
    description:
      'He began his career as an employee at El-Nasr Export and Import Company, and then moved to self-employment and established his first company in 1980, through which he worked in the field of trade.',
  },
  {
    name: 'Ahmed Hossam',
    photo: './images/candidate4.png',
    profession: 'Former football striker',
    description:
      ' publicly known as Mido, is an Egyptian football manager and former player who played as a striker. Mido started his career with Zamalek in Egypt in 1999. He left the club for Gent of Belgium in 2000, where he won the Belgian Ebony Shoe.',
  },
  {
    name: 'Hazem Emam',
    photo: './images/candidate5.png',
    profession: 'Former football playmaker',
    description:
      'azem was born in Mohandessin, Egypt. He is the son of the Zamalek legend, Hamada Emam; and the grandson of another Zamalek legend, Yehia Emam. Hazem as a kid, never planned to become a footballer and follow the footsteps of his father and grandfather.',
  },
  {
    name: 'Ahmed soliman',
    photo: './images/candidate6.png',
    profession: ' Egyptian footballer',
    description:
      'Ahmed Mahmoud Soliman was an Egyptian footballer. He competed in the men tournament at the 1928 Summer Olympics.',
  },
];

candidates.forEach((candidate) => {
  const candidateCard = document.createElement('div');

  candidateCard.innerHTML = `<div class="candidate-card">
  <img
    class="candidate-img"
    src="${candidate.photo}"
    alt="candidate ${candidate.name}"
  />
  <div class="candidate-info">
    <h4 class="candidate-name">${candidate.name}</h4>
    <p class="candidate-profession">
    ${candidate.profession}
    </p>
    <span></span>
    <p class="candidate-description">
    ${candidate.description}
    </p>
  </div>
</div>`;

  candidateContainer.appendChild(candidateCard);
});
