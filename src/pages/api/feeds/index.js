const db = [
  {
    username: 'Alan Oliveira',
    profile_picture: '/avatar.jpeg',
    card_picture: '/card_picture_1.jpg',
    card_title: 'Dia do Gamer: conheça as gírias mais populares entre os jogadores',
    card_content:
      'O Dia Internacional do Gamer é celebrado no dia 29 de agosto. Assim como qualquer outra comunidade, os jogadores construíram um universo com gírias próprias para se referir aos games.'
  },
  {
    username: 'Alan Oliveira',
    profile_picture: '/avatar.jpeg',
    card_picture: '/card_picture_2.jpg',
    card_title: 'Uber Promo chega à cidade de São Paulo',
    card_content:
      'Depois do Rio de Janeiro, a Uber escolheu São Paulo para lançar a Uber Promo, opção de corridas que oferece descontos em viagens solicitadas em horários de menor demanda.'
  },
  {
    username: 'Alan Oliveira',
    profile_picture: '/avatar.jpeg',
    card_picture: '/card_picture_3.jpg',
    card_title: 'O que são a orquestração de contêineres e o Kubernetes?',
    card_content:
      'Existe um outro conceito crítico que precisa de explicação: a orquestração. Se você possui um contêiner, isso é fácil de se gerenciar. No entanto, ao passo que crie mais contêineres, é crucial que eles sejam gerenciados. Se você não o fizer, provavelmente adentrará o caos (e o caos não é bom). O Kubernetes te salva disso.'
  },
  {
    username: 'Alan Oliveira',
    profile_picture: '/avatar.jpeg',
    card_picture: '/card_picture_4.jpg',
    card_title: 'Como os vídeos da internet estão ajudando na educação dos jovens e crianças',
    card_content:
      'De uma forma ou de outra, o vídeo sempre teve um papel importante na educação. Como ocorreu com diversas outras ferramentas, o acesso a esses conteúdos foi facilitado com a evolução tecnológica, assim como diferenciais importantes deram a eles um caráter essencial no desenvolvimento de estudantes.'
  }
]

export default function handler(req, res) {
  res.status(200).json(db)
}