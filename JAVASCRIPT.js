// For closing the Signup Page
const closeButton = document.getElementById('x');
const container = document.querySelector('.container');
if (sessionStorage.getItem('formClosed') === 'true') {
    container.style.display = 'none';
}
closeButton.addEventListener('click', () => {
    container.style.display = 'none';
    sessionStorage.setItem('formClosed', 'true');
});

// FOR Language Translation Tool
const hoverButton = document.getElementById("OneBTN");
const overlay = document.getElementById("overlay");
const text = document.getElementById("text");
const form = document.querySelector("form");

// Show overlay and text on hover
hoverButton.addEventListener("click", () => {
  overlay.style.display = "block";
  text.style.display = "block";
});

// Handle radio button selection
form.addEventListener("change", (event) => {
  const selectedLanguage = event.target.value;
  console.log("Selected Language:", selectedLanguage);
  // alert(You selected: ${selectedLanguage});
  overlay.style.display = "none";
  text.style.display = "none";
});

// For signup
document.getElementById('Signup').addEventListener('click', function() {
  document.querySelector('.login-form').style.display = 'none';
  document.querySelector('.signup-form').style.display = 'block';
});

document.getElementById('Login').addEventListener('click', function() {
  document.querySelector('.signup-form').style.display = 'none';
  document.querySelector('.login-form').style.display = 'block';
});

document.getElementById('x').addEventListener('click', function() {
  document.querySelector('.login-form').style.display = 'none';
});

document.getElementById('x-signup').addEventListener('click', function() {
  document.querySelector('.signup-form').style.display = 'none';
});
document.getElementById('Signup').addEventListener('click', function() {
  document.querySelector('.login-form').style.display = 'none';
  document.querySelector('.signup-form').style.display = 'block';
});

document.getElementById('Login').addEventListener('click', function() {
  document.querySelector('.signup-form').style.display = 'none';
  document.querySelector('.login-form').style.display = 'block';
});

document.getElementById('x').addEventListener('click', function() {
  document.querySelector('.login-form').style.display = 'none';
});

document.getElementById('x-signup').addEventListener('click', function() {
  document.querySelector('.signup-form').style.display = 'none';
});

// Data Storage at Client 
document.getElementById('x-signup').addEventListener('click', function() {
  document.querySelector('.signup-form').style.display = 'none';
});

// Handle signup form submission
document.getElementById('btn-signup').addEventListener('click', function() {
  console.log('Signup button clicked');

  const username = document.querySelector('.signup-form input[type="text"]').value;
  const email = document.querySelector('.signup-form input[type="email"]').value;
  const password = document.querySelector('.signup-form input[type="password"]').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  console.log('Username:', username);
  console.log('Email:', email);
  console.log('Password:', password);
  console.log('Confirm Password:', confirmPassword);

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  const user = {
    username: username,
    email: email,
    password: password
  };

  console.log('User object:', user);

  localStorage.setItem('user', JSON.stringify(user));
  console.log('User data stored in localStorage:', localStorage.getItem('user'));

  alert('Signup successful! You can now login.');
  document.querySelector('.signup-form').style.display = 'none';
  document.querySelector('.login-form').style.display = 'block';
});

// Handle login form submission
document.getElementById('btn').addEventListener('click', function() {
  const email = document.querySelector('.login-form input[type="email"]').value;
  const password = document.querySelector('.login-form input[type="password"]').value;

  console.log('Login button clicked');
  console.log('Email:', email);
  console.log('Password:', password);

  const storedUser = JSON.parse(localStorage.getItem('user'));

  console.log('Stored user data:', storedUser);

  if (storedUser && storedUser.email === email && storedUser.password === password) {
    alert('Login successful!');
    document.querySelector('.login-form').style.display = 'none';
    // Redirect to another page or perform other actions upon successful login
  } else {
    alert('Invalid email or password!');
  }
});

// Language Translation for Button 
const translations = {
  English: {
    loginTitle: "Login",
    emailLabel: "email",
    passwordLabel: "password",
    rememberMeLabel: "Remember me",
    signupPrompt: "Don't have an account? Sign up",
    signupTitle: "Sign Up",
    usernameLabel: "username",
    signupEmailLabel: "email",
    signupPasswordLabel: "password",
    confirmPasswordLabel: "confirm password",
    loginPrompt: "Already have an account? Login",
    aboutLink: "About Gita",
    shlokasLink: "Shlokas(Verses)",
    aboutUsTitle: "About Us",
    aboutUsText: "At The Bhagavad Gita: Integrating Ancient Wisdom with Science, we aim to provide the Bhagavad Gita being accessible to all. This website was purely made by the students of @MVSREC",
    contactTitle: "Contact",
    followUsTitle: "Follow Us",
    instagramLink: "instagram"
  },
  Hindi: {
    loginTitle: "लॉग इन करें",
    emailLabel: "ईमेल",
    passwordLabel: "पासवर्ड",
    rememberMeLabel: "मुझे याद रखें",
    signupPrompt: "खाता नहीं है? साइन अप करें",
    signupTitle: "साइन अप करें",
    usernameLabel: "उपयोगकर्ता नाम",
    signupEmailLabel: "ईमेल",
    signupPasswordLabel: "पासवर्ड",
    confirmPasswordLabel: "पासवर्ड की पुष्टि करें",
    loginPrompt: "पहले से ही एक खाता है? लॉग इन करें",
    aboutLink: "गीता के बारे में",
    shlokasLink: "श्लोक (श्लोक)",
    aboutUsTitle: "हमारे बारे में",
    aboutUsText: "भगवद गीता: विज्ञान के साथ प्राचीन ज्ञान को एकीकृत करने में, हम सभी के लिए भगवद गीता को सुलभ बनाने का प्रयास करते हैं। यह वेबसाइट @MVSREC के छात्रों द्वारा पूरी तरह से बनाई गई थी",
    contactTitle: "संपर्क करें",
    followUsTitle: "हमें का पालन करें",
    instagramLink: "इंस्टाग्राम"
  },
  Spanish: {
    loginTitle: "Iniciar sesión",
    emailLabel: "correo electrónico",
    passwordLabel: "contraseña",
    rememberMeLabel: "Recuérdame",
    signupPrompt: "¿No tienes una cuenta? Regístrate",
    signupTitle: "Regístrate",
    usernameLabel: "nombre de usuario",
    signupEmailLabel: "correo electrónico",
    signupPasswordLabel: "contraseña",
    confirmPasswordLabel: "confirmar contraseña",
    loginPrompt: "¿Ya tienes una cuenta? Iniciar sesión",
    aboutLink: "Acerca de Gita",
    shlokasLink: "Shlokas (Versos)",
    aboutUsTitle: "Sobre nosotros",
    aboutUsText: "En El Bhagavad Gita: Integrando la Sabiduría Antigua con la Ciencia, nuestro objetivo es hacer que el Bhagavad Gita sea accesible para todos. Este sitio web fue creado completamente por los estudiantes de @MVSREC",
    contactTitle: "Contacto",
    followUsTitle: "Síguenos",
    instagramLink: "instagram"
  },
  French: {
    loginTitle: "Connexion",
    emailLabel: "e-mail",
    passwordLabel: "mot de passe",
    rememberMeLabel: "Souviens-toi de moi",
    signupPrompt: "Vous n'avez pas de compte? S'inscrire",
    signupTitle: "S'inscrire",
    usernameLabel: "nom d'utilisateur",
    signupEmailLabel: "e-mail",
    signupPasswordLabel: "mot de passe",
    confirmPasswordLabel: "confirmer le mot de passe",
    loginPrompt: "Vous avez déjà un compte? Connexion",
    aboutLink: "À propos de Gita",
    shlokasLink: "Shlokas (Versets)",
    aboutUsTitle: "À propos de nous",
    aboutUsText: "À La Bhagavad Gita: Intégrer la Sagesse Ancienne avec la Science, nous visons à rendre le Bhagavad Gita accessible à tous. Ce site web a été entièrement créé par les étudiants de @MVSREC",
    contactTitle: "Contact",
    followUsTitle: "Suivez-nous",
    instagramLink: "instagram"
  },
  German: {
    loginTitle: "Anmelden",
    emailLabel: "E-Mail",
    passwordLabel: "Passwort",
    rememberMeLabel: "Erinnere dich an mich",
    signupPrompt: "Haben Sie kein Konto? Anmelden",
    signupTitle: "Anmelden",
    usernameLabel: "Benutzername",
    signupEmailLabel: "E-Mail",
    signupPasswordLabel: "Passwort",
    confirmPasswordLabel: "Passwort bestätigen",
    loginPrompt: "Haben Sie bereits ein Konto? Anmelden",
    aboutLink: "Über Gita",
    shlokasLink: "Shlokas (Verse)",
    aboutUsTitle: "Über uns",
    aboutUsText: "Bei Der Bhagavad Gita: Integration von altem Wissen mit der Wissenschaft, wir wollen die Bhagavad Gita für alle zugänglich machen. Diese Website wurde vollständig von den Studenten von @MVSREC erstellt",
    contactTitle: "Kontakt",
    followUsTitle: "Folge uns",
    instagramLink: "instagram"
  },
  Italian: {
    loginTitle: "Accedi",
    emailLabel: "e-mail",
    passwordLabel: "password",
    rememberMeLabel: "Ricordati di me",
    signupPrompt: "Non hai un account? Iscriviti",
    signupTitle: "Iscriviti",
    usernameLabel: "nome utente",
    signupEmailLabel: "e-mail",
    signupPasswordLabel: "password",
    confirmPasswordLabel: "conferma password",
    loginPrompt: "Hai già un account? Accedi",
    aboutLink: "Informazioni su Gita",
    shlokasLink: "Shlokas (Versetti)",
    aboutUsTitle: "Chi siamo",
    aboutUsText: "Alla Bhagavad Gita: Integrare la Saggezza Antica con la Scienza, miriamo a rendere il Bhagavad Gita accessibile a tutti. Questo sito web è stato interamente creato dagli studenti di @MVSREC",
    contactTitle: "Contatto",
    followUsTitle: "Seguici",
    instagramLink: "instagram"
  },
  Portuguese: {
    loginTitle: "Entrar",
    emailLabel: "e-mail",
    passwordLabel: "senha",
    rememberMeLabel: "Lembre de mim",
    signupPrompt: "Não tem uma conta? Inscrever-se",
    signupTitle: "Inscrever-se",
    usernameLabel: "nome de usuário",
    signupEmailLabel: "e-mail",
    signupPasswordLabel: "senha",
    confirmPasswordLabel: "confirmar senha",
    loginPrompt: "Já tem uma conta? Entrar",
    aboutLink: "Sobre Gita",
    shlokasLink: "Shlokas (Versos)",
    aboutUsTitle: "Sobre nós",
    aboutUsText: "No Bhagavad Gita: Integrando a Sabedoria Antiga com a Ciência, nosso objetivo é tornar o Bhagavad Gita acessível a todos. Este site foi totalmente criado pelos alunos da @MVSREC",
    contactTitle: "Contato",
    followUsTitle: "Siga-nos",
    instagramLink: "instagram"
  },
  Russian: {
    loginTitle: "Войти",
    emailLabel: "электронная почта",
    passwordLabel: "пароль",
    rememberMeLabel: "Запомни меня",
    signupPrompt: "Нет аккаунта? Зарегистрироваться",
    signupTitle: "Зарегистрироваться",
    usernameLabel: "имя пользователя",
    signupEmailLabel: "электронная почта",
    signupPasswordLabel: "пароль",
    confirmPasswordLabel: "подтвердить пароль",
    loginPrompt: "Уже есть аккаунт? Войти",
    aboutLink: "О Гите",
    shlokasLink: "Шлоки (Стихи)",
    aboutUsTitle: "О нас",
    aboutUsText: "В Бхагавад-гите: Интеграция древней мудрости с наукой, мы стремимся сделать Бхагавад-гиту доступной для всех. Этот сайт был полностью создан студентами @MVSREC",
    contactTitle: "Контакт",
    followUsTitle: "Подписывайтесь на нас",
    instagramLink: "инстаграм"
  },
  Chinese: {
    loginTitle: "登录",
    emailLabel: "电子邮件",
    passwordLabel: "密码",
    rememberMeLabel: "记住我",
    signupPrompt: "没有账户？注册",
    signupTitle: "注册",
    usernameLabel: "用户名",
    signupEmailLabel: "电子邮件",
    signupPasswordLabel: "密码",
    confirmPasswordLabel: "确认密码",
    loginPrompt: "已经有账户？登录",
    aboutLink: "关于吉塔",
    shlokasLink: "Shlokas (诗句)",
    aboutUsTitle: "关于我们",
    aboutUsText: "在《薄伽梵歌》中：将古老智慧与科学相结合，我们的目标是让《薄伽梵歌》对所有人都可访问。该网站完全由@MVSREC的学生创建",
    contactTitle: "联系",
    followUsTitle: "关注我们",
    instagramLink: "instagram"
  },
  Japanese: {
    loginTitle: "ログイン",
    emailLabel: "メール",
    passwordLabel: "パスワード",
    rememberMeLabel: "私を覚えてますか",
    signupPrompt: "アカウントをお持ちではありませんか？サインアップ",
    signupTitle: "サインアップ",
    usernameLabel: "ユーザー名",
    signupEmailLabel: "メール",
    signupPasswordLabel: "パスワード",
    confirmPasswordLabel: "パスワードを認証する",
    loginPrompt: "すでにアカウントをお持ちですか？ログイン",
    aboutLink: "ギータについて",
    shlokasLink: "Shlokas (詩)",
    aboutUsTitle: "私たちに関しては",
    aboutUsText: "バガヴァッド・ギーター：古代の知恵と科学を統合することで、バガヴァッド・ギーターをすべての人にアクセスできるようにすることを目指しています。このウェブサイトは、@MVSRECの学生によって完全に作成されました",
    contactTitle: "連絡先",
    followUsTitle: "フォローする",
    instagramLink: "インスタグラム"
  },
  Korean: {
    loginTitle: "로그인",
    emailLabel: "이메일",
    passwordLabel: "비밀번호",
    rememberMeLabel: "날 기억해",
    signupPrompt: "계정이 없으신가요? 가입하기",
    signupTitle: "가입하기",
    usernameLabel: "사용자 이름",
    signupEmailLabel: "이메일",
    signupPasswordLabel: "비밀번호",
    confirmPasswordLabel: "비밀번호 확인",
    loginPrompt: "이미 계정이 있으신가요? 로그인",
    aboutLink: "기타에 대해",
    shlokasLink: "Shlokas (구절)",
    aboutUsTitle: "회사 소개",
    aboutUsText: "바가바드 기타: 고대 지혜와 과학을 통합하여 모든 사람이 바가바드 기타에 접근할 수 있도록 하는 것을 목표로 합니다. 이 웹사이트는 @MVSREC 학생들이 완전히 만들었습니다",
    contactTitle: "연락처",
    followUsTitle: "팔로우하기",
    instagramLink: "인스타그램"
  },
  Arabic: {
    loginTitle: "تسجيل الدخول",
    emailLabel: "البريد الإلكتروني",
    passwordLabel: "كلمة المرور",
    rememberMeLabel: "تذكرني",
    signupPrompt: "ليس لديك حساب؟ اشترك",
    signupTitle: "اشترك",
    usernameLabel: "اسم المستخدم",
    signupEmailLabel: "البريد الإلكتروني",
    signupPasswordLabel: "كلمة المرور",
    confirmPasswordLabel: "تأكيد كلمة المرور",
    loginPrompt: "هل لديك حساب بالفعل؟ تسجيل الدخول",
    aboutLink: "عن الجيتا",
    shlokasLink: "Shlokas (آيات)",
    aboutUsTitle: "معلومات عنا",
    aboutUsText: "في Bhagavad Gita: دمج الحكمة القديمة مع العلم، نهدف إلى جعل Bhagavad Gita متاحًا للجميع. تم إنشاء هذا الموقع بالكامل بواسطة طلاب @MVSREC",
    contactTitle: "اتصل",
    followUsTitle: "تابعنا",
    instagramLink: "انستغرام"
  },
  Turkish: {
    loginTitle: "Giriş yap",
    emailLabel: "e-posta",
    passwordLabel: "şifre",
    rememberMeLabel: "Beni hatırla",
    signupPrompt: "Hesabınız yok mu? Kaydol",
    signupTitle: "Kaydol",
    usernameLabel: "kullanıcı adı",
    signupEmailLabel: "e-posta",
    signupPasswordLabel: "şifre",
    confirmPasswordLabel: "şifreyi onayla",
    loginPrompt: "Zaten bir hesabınız var mı? Giriş yap",
    aboutLink: "Gita hakkında",
    shlokasLink: "Shlokas (Ayetler)",
    aboutUsTitle: "Hakkımızda",
    aboutUsText: "Bhagavad Gita'da: Eski Bilgeliği Bilimle Birleştirerek, Bhagavad Gita'yı herkesin erişimine sunmayı hedefliyoruz. Bu web sitesi tamamen @MVSREC öğrencileri tarafından oluşturulmuştur",
    contactTitle: "İletişim",
    followUsTitle: "Bizi takip edin",
    instagramLink: "instagram"
  },
  Dutch: {
    loginTitle: "Inloggen",
    emailLabel: "e-mail",
    passwordLabel: "wachtwoord",
    rememberMeLabel: "Onthoud mij",
    signupPrompt: "Heb je geen account? Aanmelden",
    signupTitle: "Aanmelden",
    usernameLabel: "gebruikersnaam",
    signupEmailLabel: "e-mail",
    signupPasswordLabel: "wachtwoord",
    confirmPasswordLabel: "bevestig wachtwoord",
    loginPrompt: "Heb je al een account? Inloggen",
    aboutLink: "Over Gita",
    shlokasLink: "Shlokas (Verzen)",
    aboutUsTitle: "Over ons",
    aboutUsText: "Bij De Bhagavad Gita: Integratie van Oude Wijsheid met Wetenschap, we streven ernaar de Bhagavad Gita voor iedereen toegankelijk te maken. Deze website is volledig gemaakt door de studenten van @MVSREC",
    contactTitle: "Contact",
    followUsTitle: "Volg ons",
    instagramLink: "instagram"
  },
  Greek: {
    loginTitle: "Σύνδεση",
    emailLabel: "ηλεκτρονικό ταχυδρομείο",
    passwordLabel: "κωδικός πρόσβασης",
    rememberMeLabel: "Θυμήσου με",
    signupPrompt: "Δεν έχετε λογαριασμό; Εγγραφείτε",
    signupTitle: "Εγγραφείτε",
    usernameLabel: "όνομα χρήστη",
    signupEmailLabel: "ηλεκτρονικό ταχυδρομείο",
    signupPasswordLabel: "κωδικός πρόσβασης",
    confirmPasswordLabel: "επιβεβαίωση κωδικού πρόσβασης",
    loginPrompt: "Έχετε ήδη λογαριασμό; Σύνδεση",
    aboutLink: "Σχετικά με τη Γκίτα",
    shlokasLink: "Shlokas (Στίχοι)",
    aboutUsTitle: "Σχετικά με εμάς",
    aboutUsText: "Στο Bhagavad Gita: Ενσωμάτωση της Αρχαίας Σοφίας με την Επιστήμη, στοχεύουμε να κάνουμε το Bhagavad Gita προσβάσιμο σε όλους. Αυτός ο ιστότοπος δημιουργήθηκε εξ ολοκλήρου από τους μαθητές του @MVSREC",
    contactTitle: "Επικοινωνία",
    followUsTitle: "Ακολουθήστε μας",
    instagramLink: "instagram"
  },
  Swedish: {
    loginTitle: "Logga in",
    emailLabel: "e-post",
    passwordLabel: "lösenord",
    rememberMeLabel: "Kom ihåg mig",
    signupPrompt: "Har du inget konto? Registrera dig",
    signupTitle: "Registrera dig",
    usernameLabel: "användarnamn",
    signupEmailLabel: "e-post",
    signupPasswordLabel: "lösenord",
    confirmPasswordLabel: "bekräfta lösenord",
    loginPrompt: "Har du redan ett konto? Logga in",
    aboutLink: "Om Gita",
    shlokasLink: "Shlokas (Verser)",
    aboutUsTitle: "Om oss",
    aboutUsText: "På Bhagavad Gita: Integrera Antik Visdom med Vetenskap, strävar vi efter att göra Bhagavad Gita tillgänglig för alla. Denna webbplats skapades helt av studenterna på @MVSREC",
    contactTitle: "Kontakt",
    followUsTitle: "Följ oss",
    instagramLink: "instagram"
  },
  Polish: {
    loginTitle: "Zaloguj się",
    emailLabel: "e-mail",
    passwordLabel: "hasło",
    rememberMeLabel: "Zapamiętaj mnie",
    signupPrompt: "Nie masz konta? Zarejestruj się",
    signupTitle: "Zarejestruj się",
    usernameLabel: "nazwa użytkownika",
    signupEmailLabel: "e-mail",
    signupPasswordLabel: "hasło",
    confirmPasswordLabel: "potwierdź hasło",
    loginPrompt: "Masz już konto? Zaloguj się",
    aboutLink: "O Gicie",
    shlokasLink: "Shlokas (Wersety)",
    aboutUsTitle: "O nas",
    aboutUsText: "W Bhagavad Gita: Integracja Starożytnej Mądrości z Nauką, dążymy do tego, aby Bhagavad Gita była dostępna dla wszystkich. Ta strona została w całości stworzona przez studentów @MVSREC",
    contactTitle: "Kontakt",
    followUsTitle: "Śledź nas",
    instagramLink: "instagram"
  },

  Telugu: {
    loginTitle: "లాగిన్",
    emailLabel: "ఇమెయిల్",
    passwordLabel: "పాస్వర్డ్",
    rememberMeLabel: "నన్ను గుర్తుంచుకో",
    signupPrompt: "ఖాతా లేదా? సైన్ అప్ చేయండి",
    signupTitle: "సైన్ అప్",
    usernameLabel: "వినియోగదారు పేరు",
    signupEmailLabel: "ఇమెయిల్",
    signupPasswordLabel: "పాస్వర్డ్",
    confirmPasswordLabel: "పాస్వర్డ్ నిర్ధారించండి",
    loginPrompt: "ఇప్పటికే ఖాతా ఉందా? లాగిన్ చేయండి",
    aboutLink: "గీత గురించి",
    shlokasLink: "శ్లోకాలు",
    aboutUsTitle: "మా గురించి",
    aboutUsText: "భగవద్గీత: పురాతన జ్ఞానాన్ని విజ్ఞానంతో సమన్వయం చేస్తూ, భగవద్గీతను అందరికీ అందుబాటులో ఉంచడం మా లక్ష్యం. ఈ వెబ్సైట్ పూర్తిగా @MVSREC విద్యార్థుల చేత తయారు చేయబడింది",
    contactTitle: "సంప్రదించండి",
    followUsTitle: "మమ్మల్ని అనుసరించండి",
    instagramLink: "ఇన్స్టాగ్రామ్"
  },

    Vietnamese: {
      loginTitle: "Đăng nhập",
      emailLabel: "email",
      passwordLabel: "mật khẩu",
      rememberMeLabel: "Ghi nhớ tôi",
      signupPrompt: "Chưa có tài khoản? Đăng ký",
      signupTitle: "Đăng ký",
      usernameLabel: "tên người dùng",
      signupEmailLabel: "email",
      signupPasswordLabel: "mật khẩu",
      confirmPasswordLabel: "xác nhận mật khẩu",
      loginPrompt: "Đã có tài khoản? Đăng nhập",
      aboutLink: "Về Gita",
      shlokasLink: "Shlokas (Các câu kệ)",
      aboutUsTitle: "Về chúng tôi",
      aboutUsText: "Tại Bhagavad Gita: Tích hợp Trí tuệ Cổ đại với Khoa học, chúng tôi mong muốn mang Bhagavad Gita đến với mọi người. Trang web này được tạo ra hoàn toàn bởi sinh viên của @MVSREC",
      contactTitle: "Liên hệ",
      followUsTitle: "Theo dõi chúng tôi",
      instagramLink: "instagram"
    },
    Indonesian: {
      loginTitle: "Masuk",
      emailLabel: "email",
      passwordLabel: "kata sandi",
      rememberMeLabel: "Ingat saya",
      signupPrompt: "Belum punya akun? Daftar",
      signupTitle: "Daftar",
      usernameLabel: "nama pengguna",
      signupEmailLabel: "email",
      signupPasswordLabel: "kata sandi",
      confirmPasswordLabel: "konfirmasi kata sandi",
      loginPrompt: "Sudah punya akun? Masuk",
      aboutLink: "Tentang Gita",
      shlokasLink: "Shlokas (Syair)",
      aboutUsTitle: "Tentang Kami",
      aboutUsText: "Di Bhagavad Gita: Mengintegrasikan Kebijaksanaan Kuno dengan Sains, kami bertujuan untuk membuat Bhagavad Gita dapat diakses oleh semua. Situs web ini dibuat sepenuhnya oleh mahasiswa @MVSREC",
      contactTitle: "Kontak",
      followUsTitle: "Ikuti Kami",
      instagramLink: "instagram"
    }
  };
document.querySelectorAll('input[name="language"]').forEach((radio) => {
  radio.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    const translation = translations[selectedLanguage];

    document.getElementById('login-title').textContent = translation.loginTitle;
    document.getElementById('email-label').textContent = translation.emailLabel;
    document.getElementById('password-label').textContent = translation.passwordLabel;
    document.getElementById('remember-me-label').textContent = translation.rememberMeLabel;
    document.getElementById('signup-prompt').innerHTML = translation.signupPrompt;
    document.getElementById('signup-title').textContent = translation.signupTitle;
    document.getElementById('username-label').textContent = translation.usernameLabel;
    document.getElementById('signup-email-label').textContent = translation.signupEmailLabel;
    document.getElementById('signup-password-label').textContent = translation.signupPasswordLabel;
    document.getElementById('confirm-password-label').textContent = translation.confirmPasswordLabel;
    document.getElementById('login-prompt').innerHTML = translation.loginPrompt;
    document.getElementById('about-link').textContent = translation.aboutLink;
    document.getElementById('shlokas-link').textContent = translation.shlokasLink;
    document.getElementById('about-us-title').textContent = translation.aboutUsTitle;
    document.getElementById('about-us-text').innerHTML = translation.aboutUsText;
    document.getElementById('contact-title').textContent = translation.contactTitle;
    document.getElementById('follow-us-title').textContent = translation.followUsTitle;
    document.getElementById('instagram-link').textContent = translation.instagramLink;
  });
});


