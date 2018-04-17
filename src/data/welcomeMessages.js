const welcomeMessages = [
  "Welkom by Chatr",
  "أهلا وسهلا بك إلى Chatr",
  "Benvingut a Chatr",
  "歡迎來到Chatr",
  "Welkom bij Chatr",
  "Welcome to Chatr",
  "Bienvenue à Chatr",
  "Willkommen bei Chatr",
  "Καλώς ήλθατε στο Chatr",
  "चैटर में आपका स्वागत है",
  "Maligayang pagdating sa Chatr",
  "Chatrへようこそ",
  "Чатқа қош келдіңіз",
  "សូមស្វាគមន៍មក Chatr",
  "Chatr에 오신 것을 환영합니다.",
  "Bem-vindo ao Chatr",
  "به Chatr خوش آمدید",
  "Bienvenido a Chatr",
  "Добро пожаловать в Chatr",
  "ยินดีต้อนรับสู่ Chatr",
  "چیٹ میں خوش آمدید"
];

export default function getRandomMessage(){
  return welcomeMessages[Math.floor(Math.random()*welcomeMessages.length)];
}
