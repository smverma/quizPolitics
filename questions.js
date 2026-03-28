// questions.js - 130 questions (13 per level; 10 shown per level + 3 swap candidates)
// Each level has 13 entries; during a level the array is shuffled and
// the first 10 are "active" questions; the last 3 serve as swap pool.

const ALL_QUESTIONS = [

  // =============================================
  // LEVEL 1 — EASY — Freedom Movement Basics
  // =============================================
  {
    id: 1, level: 1,
    text: "Who is known as the 'Father of the Nation' of India?",
    options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Bal Gangadhar Tilak"],
    correct: 1,
    category: "Freedom Movement"
  },
  {
    id: 2, level: 1,
    text: "In which year did India gain independence from British rule?",
    options: ["1945", "1947", "1950", "1952"],
    correct: 1,
    category: "Freedom Movement"
  },
  {
    id: 3, level: 1,
    text: "Who was the first Prime Minister of independent India?",
    options: ["Sardar Patel", "Dr. Rajendra Prasad", "Jawaharlal Nehru", "Lal Bahadur Shastri"],
    correct: 2,
    category: "Freedom Movement"
  },
  {
    id: 4, level: 1,
    text: "In which year was the Indian National Congress founded?",
    options: ["1875", "1885", "1905", "1920"],
    correct: 1,
    category: "Freedom Movement"
  },
  {
    id: 5, level: 1,
    text: "Who gave the slogan 'Do or Die' during the Quit India Movement?",
    options: ["Subhas Chandra Bose", "Bhagat Singh", "Mahatma Gandhi", "Bal Gangadhar Tilak"],
    correct: 2,
    category: "Freedom Movement"
  },
  {
    id: 6, level: 1,
    text: "Which movement was launched by Mahatma Gandhi in 1920 against British rule?",
    options: ["Civil Disobedience Movement", "Non-Cooperation Movement", "Quit India Movement", "Swadeshi Movement"],
    correct: 1,
    category: "Freedom Movement"
  },
  {
    id: 7, level: 1,
    text: "On which date did the Indian Constitution come into effect?",
    options: ["15 August 1947", "26 November 1949", "26 January 1950", "2 October 1950"],
    correct: 2,
    category: "Freedom Movement"
  },
  {
    id: 8, level: 1,
    text: "Who was the first President of the Republic of India?",
    options: ["Sardar Patel", "Jawaharlal Nehru", "Dr. Rajendra Prasad", "Dr. S. Radhakrishnan"],
    correct: 2,
    category: "Freedom Movement"
  },
  {
    id: 9, level: 1,
    text: "In which year did Mahatma Gandhi lead the famous Dandi (Salt) March?",
    options: ["1920", "1925", "1930", "1942"],
    correct: 2,
    category: "Freedom Movement"
  },
  {
    id: 10, level: 1,
    text: "Who is known as the 'Iron Man of India'?",
    options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Sardar Vallabhbhai Patel"],
    correct: 3,
    category: "Freedom Movement"
  },
  // swap candidates
  {
    id: 11, level: 1,
    text: "Who designed the National Flag of India?",
    options: ["Rabindranath Tagore", "Pingali Venkayya", "Mahatma Gandhi", "Sarojini Naidu"],
    correct: 1,
    category: "Freedom Movement"
  },
  {
    id: 12, level: 1,
    text: "Who wrote India's national anthem 'Jana Gana Mana'?",
    options: ["Bankimchandra Chattopadhyay", "Rabindranath Tagore", "Sarojini Naidu", "Mahatma Gandhi"],
    correct: 1,
    category: "Freedom Movement"
  },
  {
    id: 13, level: 1,
    text: "The national song 'Vande Mataram' was written by:",
    options: ["Rabindranath Tagore", "Mahatma Gandhi", "Bankimchandra Chattopadhyay", "Subramania Bharati"],
    correct: 2,
    category: "Freedom Movement"
  },

  // =============================================
  // LEVEL 2 — EASY — Prime Ministers of India
  // =============================================
  {
    id: 14, level: 2,
    text: "Who was the first female Prime Minister of India?",
    options: ["Sonia Gandhi", "Indira Gandhi", "Pratibha Patil", "Sarojini Naidu"],
    correct: 1,
    category: "Prime Ministers"
  },
  {
    id: 15, level: 2,
    text: "Who was the Prime Minister of India when the country became a Republic (1950)?",
    options: ["Sardar Patel", "Jawaharlal Nehru", "Rajendra Prasad", "Lal Bahadur Shastri"],
    correct: 1,
    category: "Prime Ministers"
  },
  {
    id: 16, level: 2,
    text: "Who succeeded Lal Bahadur Shastri as Prime Minister of India?",
    options: ["Morarji Desai", "Indira Gandhi", "Gulzarilal Nanda", "Charan Singh"],
    correct: 1,
    category: "Prime Ministers"
  },
  {
    id: 17, level: 2,
    text: "Under whose Prime Ministership was the Emergency (1975–77) declared in India?",
    options: ["Morarji Desai", "Charan Singh", "Jawaharlal Nehru", "Indira Gandhi"],
    correct: 3,
    category: "Prime Ministers"
  },
  {
    id: 18, level: 2,
    text: "Which Prime Minister initiated India's economic liberalisation in 1991?",
    options: ["Rajiv Gandhi", "V.P. Singh", "P.V. Narasimha Rao", "Atal Bihari Vajpayee"],
    correct: 2,
    category: "Prime Ministers"
  },
  {
    id: 19, level: 2,
    text: "Which Prime Minister oversaw the Pokhran-II nuclear tests in 1998?",
    options: ["Rajiv Gandhi", "Manmohan Singh", "Atal Bihari Vajpayee", "P.V. Narasimha Rao"],
    correct: 2,
    category: "Prime Ministers"
  },
  {
    id: 20, level: 2,
    text: "In which year did Narendra Modi first become Prime Minister of India?",
    options: ["2010", "2012", "2014", "2016"],
    correct: 2,
    category: "Prime Ministers"
  },
  {
    id: 21, level: 2,
    text: "Which slogan is attributed to Prime Minister Lal Bahadur Shastri?",
    options: ["Garibi Hatao", "Jai Jawan Jai Kisan", "India Shining", "Make in India"],
    correct: 1,
    category: "Prime Ministers"
  },
  {
    id: 22, level: 2,
    text: "Who was the first Prime Minister from the Bharatiya Janata Party (BJP)?",
    options: ["L.K. Advani", "Atal Bihari Vajpayee", "Narendra Modi", "Murli Manohar Joshi"],
    correct: 1,
    category: "Prime Ministers"
  },
  {
    id: 23, level: 2,
    text: "Which Prime Minister launched the famous 'Garibi Hatao' campaign?",
    options: ["Jawaharlal Nehru", "Lal Bahadur Shastri", "Indira Gandhi", "Rajiv Gandhi"],
    correct: 2,
    category: "Prime Ministers"
  },
  // swap candidates
  {
    id: 24, level: 2,
    text: "For how many years did Manmohan Singh serve as Prime Minister?",
    options: ["5 years", "7 years", "10 years", "12 years"],
    correct: 2,
    category: "Prime Ministers"
  },
  {
    id: 25, level: 2,
    text: "Who was Prime Minister of India during the 1962 Sino-Indian War?",
    options: ["Sardar Patel", "Jawaharlal Nehru", "Lal Bahadur Shastri", "Morarji Desai"],
    correct: 1,
    category: "Prime Ministers"
  },
  {
    id: 26, level: 2,
    text: "Which Prime Minister nationalised 14 major commercial banks in 1969?",
    options: ["Jawaharlal Nehru", "Lal Bahadur Shastri", "Indira Gandhi", "P.V. Narasimha Rao"],
    correct: 2,
    category: "Prime Ministers"
  },

  // =============================================
  // LEVEL 3 — EASY — Chief Ministers
  // =============================================
  {
    id: 27, level: 3,
    text: "Who was the first Chief Minister of Uttar Pradesh?",
    options: ["Govind Ballabh Pant", "Sampurnanand", "C.B. Gupta", "Sucheta Kriplani"],
    correct: 0,
    category: "Chief Ministers"
  },
  {
    id: 28, level: 3,
    text: "Who was the first Chief Minister of Maharashtra (1960)?",
    options: ["Vasantrao Naik", "Y.B. Chavan", "Shankarrao Chavan", "Vilasrao Deshmukh"],
    correct: 1,
    category: "Chief Ministers"
  },
  {
    id: 29, level: 3,
    text: "Who was the first Chief Minister of West Bengal after independence?",
    options: ["Prafulla Chandra Ghosh", "Bidhan Chandra Roy", "Jyoti Basu", "Siddhartha Shankar Ray"],
    correct: 0,
    category: "Chief Ministers"
  },
  {
    id: 30, level: 3,
    text: "Sucheta Kriplani was India's first female Chief Minister. Which state did she govern?",
    options: ["Maharashtra", "Rajasthan", "Uttar Pradesh", "Punjab"],
    correct: 2,
    category: "Chief Ministers"
  },
  {
    id: 31, level: 3,
    text: "Who is recognised as the longest-serving Chief Minister in Indian history (Sikkim, 1994–2019)?",
    options: ["Jyoti Basu", "Pawan Chamling", "Naveen Patnaik", "Sheila Dikshit"],
    correct: 1,
    category: "Chief Ministers"
  },
  {
    id: 32, level: 3,
    text: "Who was the first Chief Minister of Gujarat (1960)?",
    options: ["Chimanbhai Patel", "Jivraj Narayan Mehta", "Madhavsinh Solanki", "Narendra Modi"],
    correct: 1,
    category: "Chief Ministers"
  },
  {
    id: 33, level: 3,
    text: "Narendra Modi served as Chief Minister of which state before becoming Prime Minister?",
    options: ["Rajasthan", "Gujarat", "Maharashtra", "Madhya Pradesh"],
    correct: 1,
    category: "Chief Ministers"
  },
  {
    id: 34, level: 3,
    text: "Mamata Banerjee is the Chief Minister of which state?",
    options: ["Assam", "Odisha", "West Bengal", "Bihar"],
    correct: 2,
    category: "Chief Ministers"
  },
  {
    id: 35, level: 3,
    text: "Yogi Adityanath serves as Chief Minister of which state?",
    options: ["Madhya Pradesh", "Rajasthan", "Gujarat", "Uttar Pradesh"],
    correct: 3,
    category: "Chief Ministers"
  },
  {
    id: 36, level: 3,
    text: "Who was the first Chief Minister of Tamil Nadu (after the state was renamed from Madras in 1969)?",
    options: ["M.G. Ramachandran", "M. Karunanidhi", "C.N. Annadurai", "O. Paneerselvam"],
    correct: 2,
    category: "Chief Ministers"
  },
  // swap candidates
  {
    id: 37, level: 3,
    text: "Naveen Patnaik is the Chief Minister of which state?",
    options: ["Assam", "Odisha", "Jharkhand", "Chhattisgarh"],
    correct: 1,
    category: "Chief Ministers"
  },
  {
    id: 38, level: 3,
    text: "Who was the first Chief Minister of Andhra Pradesh (1953)?",
    options: ["N.T. Rama Rao", "Neelam Sanjiva Reddy", "Marri Chenna Reddy", "P.V. Narasimha Rao"],
    correct: 1,
    category: "Chief Ministers"
  },
  {
    id: 39, level: 3,
    text: "For approximately how many years did Jyoti Basu serve as Chief Minister of West Bengal?",
    options: ["10 years", "15 years", "23 years", "30 years"],
    correct: 2,
    category: "Chief Ministers"
  },

  // =============================================
  // LEVEL 4 — MEDIUM — Freedom Movement (Deep)
  // =============================================
  {
    id: 40, level: 4,
    text: "In which year did the Jallianwala Bagh massacre take place?",
    options: ["1915", "1917", "1919", "1921"],
    correct: 2,
    category: "Freedom Movement"
  },
  {
    id: 41, level: 4,
    text: "Who reorganised and led the Indian National Army (Azad Hind Fauj)?",
    options: ["Bhagat Singh", "Chandrashekhar Azad", "Subhas Chandra Bose", "V.D. Savarkar"],
    correct: 2,
    category: "Freedom Movement"
  },
  {
    id: 42, level: 4,
    text: "The Rowlatt Act of 1919 empowered the British to:",
    options: [
      "Grant dominion status to India",
      "Detain political suspects without trial",
      "Establish new universities",
      "Provide limited voting rights"
    ],
    correct: 1,
    category: "Freedom Movement"
  },
  {
    id: 43, level: 4,
    text: "Who authored the famous pamphlet 'Hind Swaraj' (1909)?",
    options: ["Bal Gangadhar Tilak", "Mahatma Gandhi", "Jawaharlal Nehru", "Lala Lajpat Rai"],
    correct: 1,
    category: "Freedom Movement"
  },
  {
    id: 44, level: 4,
    text: "At which INC session was the demand for complete independence (Purna Swaraj) first adopted?",
    options: ["Calcutta, 1928", "Lahore, 1929", "Karachi, 1931", "Allahabad, 1930"],
    correct: 1,
    category: "Freedom Movement"
  },
  {
    id: 45, level: 4,
    text: "Who gave the slogan 'Swaraj is my birthright and I shall have it'?",
    options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Bal Gangadhar Tilak", "Lala Lajpat Rai"],
    correct: 2,
    category: "Freedom Movement"
  },
  {
    id: 46, level: 4,
    text: "The Champaran Satyagraha (1917) was primarily against which injustice?",
    options: ["Salt tax", "Forced indigo cultivation", "Excessive land revenue", "Factory conditions"],
    correct: 1,
    category: "Freedom Movement"
  },
  {
    id: 47, level: 4,
    text: "Which legislation formally led to the partition of India and creation of two independent dominions?",
    options: [
      "Government of India Act 1935",
      "Indian Independence Act 1947",
      "Montagu-Chelmsford Reforms 1919",
      "Morley-Minto Reforms 1909"
    ],
    correct: 1,
    category: "Freedom Movement"
  },
  {
    id: 48, level: 4,
    text: "Who presided over the historic Lahore Congress session (1929) where Purna Swaraj was declared?",
    options: ["Mahatma Gandhi", "Subhas Chandra Bose", "Jawaharlal Nehru", "Motilal Nehru"],
    correct: 2,
    category: "Freedom Movement"
  },
  {
    id: 49, level: 4,
    text: "The Kakori Train Robbery (1925) was masterminded primarily by:",
    options: ["Bhagat Singh", "Ram Prasad Bismil", "Subhas Chandra Bose", "Ashfaqulla Khan"],
    correct: 1,
    category: "Freedom Movement"
  },
  // swap candidates
  {
    id: 50, level: 4,
    text: "Who founded the Brahmo Samaj (1828), a key social reform movement?",
    options: ["Swami Vivekananda", "Dayananda Saraswati", "Raja Ram Mohan Roy", "Bal Gangadhar Tilak"],
    correct: 2,
    category: "Freedom Movement"
  },
  {
    id: 51, level: 4,
    text: "The first session of the Indian National Congress (1885) was held in:",
    options: ["Calcutta", "Bombay (Mumbai)", "Madras", "Allahabad"],
    correct: 1,
    category: "Freedom Movement"
  },
  {
    id: 52, level: 4,
    text: "Bal Gangadhar Tilak was popularly called:",
    options: ["Lokmanya", "Deshbandhu", "Netaji", "Bapuji"],
    correct: 0,
    category: "Freedom Movement"
  },

  // =============================================
  // LEVEL 5 — MEDIUM — Post-Independence India
  // =============================================
  {
    id: 53, level: 5,
    text: "In which year was the Planning Commission of India established?",
    options: ["1947", "1950", "1952", "1956"],
    correct: 1,
    category: "Post-Independence India"
  },
  {
    id: 54, level: 5,
    text: "India's first Five Year Plan was launched in which year?",
    options: ["1950", "1951", "1952", "1956"],
    correct: 1,
    category: "Post-Independence India"
  },
  {
    id: 55, level: 5,
    text: "The Anti-Hindi agitations of the 1960s were most intense in which state?",
    options: ["Punjab", "Karnataka", "Tamil Nadu", "Maharashtra"],
    correct: 2,
    category: "Post-Independence India"
  },
  {
    id: 56, level: 5,
    text: "Operation Blue Star (1984) was conducted to:",
    options: [
      "Liberate Goa from Portuguese rule",
      "Remove militants from the Golden Temple, Amritsar",
      "Conduct nuclear tests in Rajasthan",
      "Free Indian POWs from Pakistan"
    ],
    correct: 1,
    category: "Post-Independence India"
  },
  {
    id: 57, level: 5,
    text: "The Mandal Commission Report (implemented 1990) primarily recommended reservations for:",
    options: ["Scheduled Castes", "Religious minorities", "Other Backward Classes (OBCs)", "Women"],
    correct: 2,
    category: "Post-Independence India"
  },
  {
    id: 58, level: 5,
    text: "India's LPG (Liberalisation, Privatisation, Globalisation) economic reforms were initiated in:",
    options: ["1989", "1991", "1994", "1996"],
    correct: 1,
    category: "Post-Independence India"
  },
  {
    id: 59, level: 5,
    text: "India liberated Goa from Portuguese colonial rule in:",
    options: ["1947", "1956", "1961", "1971"],
    correct: 2,
    category: "Post-Independence India"
  },
  {
    id: 60, level: 5,
    text: "In which of the following sets did India and Pakistan fight wars?",
    options: [
      "1947, 1962, 1965, 1971",
      "1947, 1965, 1971, 1999",
      "1950, 1965, 1971, 1999",
      "1947, 1962, 1971, 1999"
    ],
    correct: 1,
    category: "Post-Independence India"
  },
  {
    id: 61, level: 5,
    text: "The Emergency declared by Indira Gandhi lasted from:",
    options: ["1973–1975", "1975–1977", "1975–1979", "1977–1979"],
    correct: 1,
    category: "Post-Independence India"
  },
  {
    id: 62, level: 5,
    text: "India's first nuclear test, codenamed 'Smiling Buddha', was conducted in:",
    options: ["1968", "1974", "1980", "1985"],
    correct: 1,
    category: "Post-Independence India"
  },
  // swap candidates
  {
    id: 63, level: 5,
    text: "The Green Revolution in India is closely associated with the agricultural scientist:",
    options: ["Norman Borlaug", "M.S. Swaminathan", "Verghese Kurien", "C. Subramaniam"],
    correct: 1,
    category: "Post-Independence India"
  },
  {
    id: 64, level: 5,
    text: "The Bangladesh Liberation War that led to the creation of Bangladesh took place in:",
    options: ["1965", "1969", "1971", "1973"],
    correct: 2,
    category: "Post-Independence India"
  },
  {
    id: 65, level: 5,
    text: "Operation Flood, which revolutionised India's dairy industry, was led by:",
    options: ["M.S. Swaminathan", "V. Kurien (Verghese Kurien)", "Sam Pitroda", "C. Subramaniam"],
    correct: 1,
    category: "Post-Independence India"
  },

  // =============================================
  // LEVEL 6 — MEDIUM — Acts, Amendments & Events
  // =============================================
  {
    id: 66, level: 6,
    text: "Which Constitutional Amendment added the words 'Socialist' and 'Secular' to India's Preamble?",
    options: ["40th Amendment", "42nd Amendment", "44th Amendment", "52nd Amendment"],
    correct: 1,
    category: "Important Acts & Amendments"
  },
  {
    id: 67, level: 6,
    text: "The Right to Education (RTE) Act was enacted in:",
    options: ["2005", "2007", "2009", "2012"],
    correct: 2,
    category: "Important Acts & Amendments"
  },
  {
    id: 68, level: 6,
    text: "The States Reorganisation Act, 1956 reorganised Indian states primarily on the basis of:",
    options: ["Religion", "Geography", "Language", "Population"],
    correct: 2,
    category: "Important Acts & Amendments"
  },
  {
    id: 69, level: 6,
    text: "The Protection of Women from Domestic Violence Act was passed in:",
    options: ["2000", "2003", "2005", "2010"],
    correct: 2,
    category: "Important Acts & Amendments"
  },
  {
    id: 70, level: 6,
    text: "Which Constitutional Amendment made free and compulsory education a Fundamental Right?",
    options: ["73rd Amendment", "74th Amendment", "86th Amendment", "93rd Amendment"],
    correct: 2,
    category: "Important Acts & Amendments"
  },
  {
    id: 71, level: 6,
    text: "The Right to Information (RTI) Act was enacted in:",
    options: ["2002", "2003", "2005", "2007"],
    correct: 2,
    category: "Important Acts & Amendments"
  },
  {
    id: 72, level: 6,
    text: "Goods and Services Tax (GST) was implemented in India on:",
    options: ["1 April 2017", "1 July 2017", "1 October 2017", "1 January 2018"],
    correct: 1,
    category: "Important Acts & Amendments"
  },
  {
    id: 73, level: 6,
    text: "Article 370 granting special status to Jammu & Kashmir was abrogated in:",
    options: ["2015", "2017", "2019", "2021"],
    correct: 2,
    category: "Important Acts & Amendments"
  },
  {
    id: 74, level: 6,
    text: "The Citizenship Amendment Act (CAA) was passed by Indian Parliament in:",
    options: ["2017", "2018", "2019", "2020"],
    correct: 2,
    category: "Important Acts & Amendments"
  },
  {
    id: 75, level: 6,
    text: "The Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA) was enacted in:",
    options: ["2003", "2005", "2007", "2009"],
    correct: 1,
    category: "Important Acts & Amendments"
  },
  // swap candidates
  {
    id: 76, level: 6,
    text: "Which Constitutional Amendment reduced the voting age from 21 to 18 years?",
    options: ["44th Amendment", "52nd Amendment", "61st Amendment", "73rd Amendment"],
    correct: 2,
    category: "Important Acts & Amendments"
  },
  {
    id: 77, level: 6,
    text: "The 73rd Constitutional Amendment (1992) deals with:",
    options: ["Freedom of Press", "Panchayati Raj Institutions", "Bank Nationalisation", "Anti-defection Law"],
    correct: 1,
    category: "Important Acts & Amendments"
  },
  {
    id: 78, level: 6,
    text: "The 44th Amendment (1978) downgraded the Right to Property from a Fundamental Right to a:",
    options: ["Directive Principle", "Constitutional Right", "Legal Right", "Moral Right"],
    correct: 2,
    category: "Important Acts & Amendments"
  },

  // =============================================
  // LEVEL 7 — MEDIUM — Prime Ministers (Advanced)
  // =============================================
  {
    id: 79, level: 7,
    text: "P.V. Narasimha Rao served as Prime Minister of India from:",
    options: ["1989–1991", "1991–1996", "1996–1997", "1997–1998"],
    correct: 1,
    category: "Prime Ministers"
  },
  {
    id: 80, level: 7,
    text: "The 'Look East Policy' was introduced by which Prime Minister?",
    options: ["Rajiv Gandhi", "V.P. Singh", "P.V. Narasimha Rao", "Atal Bihari Vajpayee"],
    correct: 2,
    category: "Prime Ministers"
  },
  {
    id: 81, level: 7,
    text: "Who was Prime Minister of India during the 1971 India–Pakistan War?",
    options: ["Jawaharlal Nehru", "Lal Bahadur Shastri", "Indira Gandhi", "Morarji Desai"],
    correct: 2,
    category: "Prime Ministers"
  },
  {
    id: 82, level: 7,
    text: "Rajiv Gandhi became India's youngest Prime Minister at the age of:",
    options: ["35", "38", "40", "43"],
    correct: 2,
    category: "Prime Ministers"
  },
  {
    id: 83, level: 7,
    text: "The Bofors scandal that severely dented public trust is associated with which Prime Minister?",
    options: ["P.V. Narasimha Rao", "Rajiv Gandhi", "V.P. Singh", "Manmohan Singh"],
    correct: 1,
    category: "Prime Ministers"
  },
  {
    id: 84, level: 7,
    text: "Indira Gandhi was assassinated in:",
    options: ["1982", "1983", "1984", "1986"],
    correct: 2,
    category: "Prime Ministers"
  },
  {
    id: 85, level: 7,
    text: "Which Prime Minister signed the historic Shimla Agreement with Pakistan in 1972?",
    options: ["Jawaharlal Nehru", "Lal Bahadur Shastri", "Indira Gandhi", "Morarji Desai"],
    correct: 2,
    category: "Prime Ministers"
  },
  {
    id: 86, level: 7,
    text: "Atal Bihari Vajpayee's first government (1996) lasted only:",
    options: ["13 days", "1 month", "6 months", "1 year"],
    correct: 0,
    category: "Prime Ministers"
  },
  {
    id: 87, level: 7,
    text: "The Tashkent Agreement (1966) was signed after the 1965 India–Pakistan War by Prime Minister:",
    options: ["Jawaharlal Nehru", "Lal Bahadur Shastri", "Indira Gandhi", "Morarji Desai"],
    correct: 1,
    category: "Prime Ministers"
  },
  {
    id: 88, level: 7,
    text: "Which Prime Minister introduced the 'India Shining' campaign in the 2004 elections?",
    options: ["P.V. Narasimha Rao", "H.D. Deve Gowda", "Atal Bihari Vajpayee", "Manmohan Singh"],
    correct: 2,
    category: "Prime Ministers"
  },
  // swap candidates
  {
    id: 89, level: 7,
    text: "Rajiv Gandhi was assassinated in which year?",
    options: ["1989", "1990", "1991", "1992"],
    correct: 2,
    category: "Prime Ministers"
  },
  {
    id: 90, level: 7,
    text: "Which Prime Minister served India on two non-consecutive occasions (1966–77 & 1980–84)?",
    options: ["Jawaharlal Nehru", "Indira Gandhi", "Atal Bihari Vajpayee", "Manmohan Singh"],
    correct: 1,
    category: "Prime Ministers"
  },
  {
    id: 91, level: 7,
    text: "The Nuclear Deal (123 Agreement) between India and the USA was negotiated under:",
    options: ["Atal Bihari Vajpayee", "Manmohan Singh", "Narendra Modi", "P.V. Narasimha Rao"],
    correct: 1,
    category: "Prime Ministers"
  },

  // =============================================
  // LEVEL 8 — HARD — Constitution & Governance
  // =============================================
  {
    id: 92, level: 8,
    text: "Who was the President of the Constituent Assembly that drafted the Indian Constitution?",
    options: ["Jawaharlal Nehru", "Sardar Patel", "Dr. Rajendra Prasad", "B.R. Ambedkar"],
    correct: 2,
    category: "Constitution"
  },
  {
    id: 93, level: 8,
    text: "Who chaired the Drafting Committee of the Indian Constitution?",
    options: ["Jawaharlal Nehru", "Rajendra Prasad", "B.R. Ambedkar", "Alladi Krishnaswami Ayyar"],
    correct: 2,
    category: "Constitution"
  },
  {
    id: 94, level: 8,
    text: "Which article of the Indian Constitution is called the 'Heart and Soul' by Ambedkar (Right to Constitutional Remedies)?",
    options: ["Article 14", "Article 19", "Article 21", "Article 32"],
    correct: 3,
    category: "Constitution"
  },
  {
    id: 95, level: 8,
    text: "The Directive Principles of State Policy (Part IV) were borrowed from the Constitution of:",
    options: ["USA", "UK", "Ireland", "Canada"],
    correct: 2,
    category: "Constitution"
  },
  {
    id: 96, level: 8,
    text: "The Second Five Year Plan (1956–61) was based on the model developed by:",
    options: ["Jawaharlal Nehru", "P.C. Mahalanobis", "C.D. Deshmukh", "V.K.R.V. Rao"],
    correct: 1,
    category: "Post-Independence India"
  },
  {
    id: 97, level: 8,
    text: "India's 1998 nuclear test series was codenamed:",
    options: ["Operation Shakti", "Operation Smiling Buddha", "Operation Blue Star", "Operation Vajra"],
    correct: 0,
    category: "Post-Independence India"
  },
  {
    id: 98, level: 8,
    text: "Who was the first Chief Election Commissioner of India?",
    options: ["T.N. Seshan", "M.S. Gill", "Sukumar Sen", "K.V.K. Sundaram"],
    correct: 2,
    category: "Constitution"
  },
  {
    id: 99, level: 8,
    text: "The Nehru Report (1928) was drafted to propose:",
    options: [
      "Complete independence for India",
      "A Dominion Status constitution for India",
      "Partition of Bengal",
      "Separate electorates for minorities"
    ],
    correct: 1,
    category: "Freedom Movement"
  },
  {
    id: 100, level: 8,
    text: "Article 356 of the Indian Constitution provides for:",
    options: ["Fundamental Rights", "President's Rule in a State", "Financial Emergency", "Anti-defection Law"],
    correct: 1,
    category: "Constitution"
  },
  {
    id: 101, level: 8,
    text: "The Uniform Civil Code is enshrined in which article of the Indian Constitution?",
    options: ["Article 40", "Article 44", "Article 48", "Article 51"],
    correct: 1,
    category: "Constitution"
  },
  // swap candidates
  {
    id: 102, level: 8,
    text: "How many articles did the original Indian Constitution contain?",
    options: ["355", "395", "415", "448"],
    correct: 1,
    category: "Constitution"
  },
  {
    id: 103, level: 8,
    text: "The Right to Property was removed as a Fundamental Right by which amendment?",
    options: ["40th Amendment", "42nd Amendment", "44th Amendment", "52nd Amendment"],
    correct: 2,
    category: "Constitution"
  },
  {
    id: 104, level: 8,
    text: "The concept of 'Basic Structure' of the Constitution was established in which landmark case?",
    options: ["Golaknath case (1967)", "Kesavananda Bharati case (1973)", "Minerva Mills case (1980)", "Maneka Gandhi case (1978)"],
    correct: 1,
    category: "Constitution"
  },

  // =============================================
  // LEVEL 9 — HARD — Colonial History
  // =============================================
  {
    id: 105, level: 9,
    text: "The Simon Commission (1927) was boycotted by Indians primarily because:",
    options: [
      "It proposed direct partition of India",
      "It had no Indian members",
      "It was appointed to extend the Rowlatt Act",
      "It recommended complete independence"
    ],
    correct: 1,
    category: "Freedom Movement"
  },
  {
    id: 106, level: 9,
    text: "Who founded the Forward Bloc political party in 1939?",
    options: ["Jawaharlal Nehru", "Subhas Chandra Bose", "Bhagat Singh", "Chandrashekhar Azad"],
    correct: 1,
    category: "Freedom Movement"
  },
  {
    id: 107, level: 9,
    text: "The Permanent Settlement (1793), which fixed land revenue in Bengal permanently, was introduced by:",
    options: ["Warren Hastings", "Lord Cornwallis", "Lord Dalhousie", "Lord Wellesley"],
    correct: 1,
    category: "Colonial History"
  },
  {
    id: 108, level: 9,
    text: "The 'Doctrine of Lapse', under which states without a natural heir were annexed, was introduced by:",
    options: ["Lord Cornwallis", "Lord Wellesley", "Lord Dalhousie", "Lord Ripon"],
    correct: 2,
    category: "Colonial History"
  },
  {
    id: 109, level: 9,
    text: "Who was elected as the first President of the Indian National Congress (1885)?",
    options: ["Mahatma Gandhi", "Bal Gangadhar Tilak", "W.C. Bonnerjee", "Dadabhai Naoroji"],
    correct: 2,
    category: "Freedom Movement"
  },
  {
    id: 110, level: 9,
    text: "The Partition of Bengal (1905) was ordered by which Viceroy?",
    options: ["Lord Curzon", "Lord Minto", "Lord Morley", "Lord Hardinge"],
    correct: 0,
    category: "Colonial History"
  },
  {
    id: 111, level: 9,
    text: "The Montagu-Chelmsford Reforms of 1919 introduced which system of governance in Indian provinces?",
    options: ["Complete provincial autonomy", "Dyarchy", "Responsible government", "Federal structure"],
    correct: 1,
    category: "Colonial History"
  },
  {
    id: 112, level: 9,
    text: "Who was the Viceroy of India during the Quit India Movement (1942)?",
    options: ["Lord Linlithgow", "Lord Wavell", "Lord Mountbatten", "Lord Hardinge"],
    correct: 0,
    category: "Colonial History"
  },
  {
    id: 113, level: 9,
    text: "The August Offer (1940), promising dominion status after World War II, was made by Viceroy:",
    options: ["Lord Wavell", "Lord Mountbatten", "Lord Linlithgow", "Lord Irwin"],
    correct: 2,
    category: "Colonial History"
  },
  {
    id: 114, level: 9,
    text: "The Cabinet Mission Plan (1946) proposed for India:",
    options: [
      "Complete and immediate independence",
      "Partition into two dominions",
      "A three-tier federal structure",
      "Provincial autonomy without a central government"
    ],
    correct: 2,
    category: "Colonial History"
  },
  // swap candidates
  {
    id: 115, level: 9,
    text: "The Great Revolt of 1857 began in:",
    options: ["Delhi", "Meerut", "Lucknow", "Kanpur"],
    correct: 1,
    category: "Colonial History"
  },
  {
    id: 116, level: 9,
    text: "Who was the first Governor-General of independent India?",
    options: ["Lord Mountbatten", "C. Rajagopalachari", "Jawaharlal Nehru", "Sardar Patel"],
    correct: 0,
    category: "Colonial History"
  },
  {
    id: 117, level: 9,
    text: "The Government of India Act 1935 introduced:",
    options: [
      "Full independence",
      "Dyarchy at the centre",
      "Provincial autonomy and a federal structure",
      "A unicameral legislature"
    ],
    correct: 2,
    category: "Colonial History"
  },

  // =============================================
  // LEVEL 10 — HARD — Advanced Political Knowledge
  // =============================================
  {
    id: 118, level: 10,
    text: "Who introduced competitive examinations for the Indian Civil Service, transforming colonial bureaucracy?",
    options: ["Lord Macaulay", "Lord Cornwallis", "Lord Dalhousie", "Lord Curzon"],
    correct: 0,
    category: "Colonial History"
  },
  {
    id: 119, level: 10,
    text: "The Ilbert Bill controversy (1883) centred on the right of:",
    options: [
      "Indians to own land",
      "Indian judges to try European accused",
      "Indians to join the Indian Civil Service",
      "Indians to publish newspapers freely"
    ],
    correct: 1,
    category: "Colonial History"
  },
  {
    id: 120, level: 10,
    text: "India's first general elections were held in:",
    options: ["1949–50", "1951–52", "1953–54", "1955–56"],
    correct: 1,
    category: "Post-Independence India"
  },
  {
    id: 121, level: 10,
    text: "The Sarkaria Commission (1983) was set up to examine:",
    options: ["Electoral reforms", "Centre–State relations", "Police reforms", "Judicial appointments"],
    correct: 1,
    category: "Constitution"
  },
  {
    id: 122, level: 10,
    text: "The 73rd and 74th Constitutional Amendments (1992) deal respectively with:",
    options: [
      "Anti-defection law and reservations",
      "Panchayati Raj and urban local bodies",
      "Bank nationalisation and reservation",
      "Language policy and minorities"
    ],
    correct: 1,
    category: "Important Acts & Amendments"
  },
  {
    id: 123, level: 10,
    text: "The Kargil War between India and Pakistan took place in:",
    options: ["1997", "1998", "1999", "2001"],
    correct: 2,
    category: "Post-Independence India"
  },
  {
    id: 124, level: 10,
    text: "The National Democratic Alliance (NDA) was formed in:",
    options: ["1994", "1996", "1998", "2000"],
    correct: 2,
    category: "Post-Independence India"
  },
  {
    id: 125, level: 10,
    text: "The Tashkent Declaration (1966) was signed to end which conflict?",
    options: ["1962 Sino-Indian War", "1965 Indo-Pakistani War", "1971 Bangladesh Liberation War", "1999 Kargil War"],
    correct: 1,
    category: "Post-Independence India"
  },
  {
    id: 126, level: 10,
    text: "The famous 'Tryst with Destiny' speech on India's independence was delivered by:",
    options: ["Mahatma Gandhi", "Sardar Patel", "Jawaharlal Nehru", "Subhas Chandra Bose"],
    correct: 2,
    category: "Freedom Movement"
  },
  {
    id: 127, level: 10,
    text: "The Anti-Defection Law (Tenth Schedule) was added to the Constitution by which amendment?",
    options: ["42nd Amendment", "44th Amendment", "52nd Amendment", "61st Amendment"],
    correct: 2,
    category: "Important Acts & Amendments"
  },
  // swap candidates
  {
    id: 128, level: 10,
    text: "Who was the first Deputy Prime Minister of independent India?",
    options: ["Jawaharlal Nehru", "Lal Bahadur Shastri", "Sardar Vallabhbhai Patel", "Morarji Desai"],
    correct: 2,
    category: "Post-Independence India"
  },
  {
    id: 129, level: 10,
    text: "The Shimla Agreement between India and Pakistan was signed in:",
    options: ["1965", "1971", "1972", "1974"],
    correct: 2,
    category: "Post-Independence India"
  },
  {
    id: 130, level: 10,
    text: "The Supreme Court struck down the National Judicial Appointments Commission (NJAC) in:",
    options: ["2013", "2014", "2015", "2016"],
    correct: 2,
    category: "Constitution"
  }
];
