type MuscleInfoType = {
  [key: string]: {
    id: number;
    name: string;
    exercises: {
      id: number;
      name: string;
      equipment: string;
      target: string;
    }[];
    about: string[];
  };
};

export const MuscleInfo: MuscleInfoType = {
  Chest: {
    id: 10,
    name: "Chest",
    exercises: [
      {
        id: 101,
        name: "Flat Bench Press",
        equipment: "Barbell/Dumbbell",
        target: "Overall Chest",
      },
      {
        id: 102,
        name: "Incline Bench Press",
        equipment: "Barbell/Dumbbell",
        target: "Upper Chest",
      },
      {
        id: 103,
        name: "Decline Bench Press",
        equipment: "Barbell/Dumbbell",
        target: "Lower Chest",
      },
      {
        id: 104,
        name: "Cable Crossover (low to high)",
        equipment: "Cable",
        target: "Lower Chest",
      },
      {
        id: 105,
        name: "Cable Crossover (high to low)",
        equipment: "Cable",
        target: "Upper Chest",
      },
      {
        id: 106,
        name: "Dumbbell Fly",
        equipment: "Dumbbell",
        target: "Overall Chest",
      },
      {
        id: 107,
        name: "Pec Deck",
        equipment: "Machine",
        target: "Overall Chest",
      },
      {
        id: 108,
        name: "Dumbbell Pullover",
        equipment: "Dumbbell",
        target: "Upper Chest",
      },
    ],
    about: [
      "The chest muscles, also known as the pectoral muscles or pecs, are a group of muscles located in the upper front of the body.",
      "The chest is divided into two main parts - the upper chest (or upper pecs) and the lower chest (or lower pecs), with the former being the larger and more visible of the two.",
    ],
  },
  Lats: {
    id: 20,
    name: "Lats",
    exercises: [
      {
        id: 201,
        name: "Pull Up",
        equipment: "Bodyweight",
        target: "Upper Back/Lats",
      },
      {
        id: 202,
        name: "Chin Up",
        equipment: "Bodyweight",
        target: "Upper Back/Lats",
      },
      {
        id: 203,
        name: "Lat Pulldown",
        equipment: "Cable",
        target: "Lats",
      },
      {
        id: 204,
        name: "Bent Over Row",
        equipment: "Barbell",
        target: "Lats",
      },
      {
        id: 205,
        name: "One Arm Dumbbell Row",
        equipment: "Dumbbell",
        target: "Lats",
      },
      {
        id: 206,
        name: "Straight Arm Pulldown",
        equipment: "Cable",
        target: "Lats",
      },
    ],
    about: [
      "The latissimus dorsi, commonly referred to as the lats, are a large muscle group located on the sides of the back.",
      "The lats have several functions, including shoulder extension, adduction, and internal rotation.",
      "It's important to vary the types of exercises and rep ranges to ensure balanced muscle development and avoid overuse injuries.",
    ],
  },
  Traps: {
    id: 30,
    name: "Traps",
    exercises: [
      {
        id: 301,
        name: "Dumbbell Shrugs",
        equipment: "Dumbbell",
        target: "Traps",
      },
      {
        id: 302,
        name: "Barbell Shrugs",
        equipment: "Barbell",
        target: "Traps",
      },
      {
        id: 303,
        name: "Cable Shrugs",
        equipment: "Cable",
        target: "Traps",
      },
      {
        id: 304,
        name: "Trap Bar Shrugs",
        equipment: "Trap Bar",
        target: "Traps",
      },
      {
        id: 305,
        name: "Upright Row",
        equipment: "Barbell",
        target: "Traps",
      },
    ],
    about: [
      "The trapezius muscles, commonly referred to as the traps, are a large muscle group located on the upper back and neck.",
      "The traps are composed of three main sections: the upper traps, middle traps, and lower traps. Each section of the traps can be targeted with specific exercises to promote muscle growth and development.",
      "Varying the types of exercises, rep ranges, and weights can also help to stimulate muscle growth and prevent plateaus in your training.",
    ],
  },
  TrapsMidBack: {
    id: 40,
    name: "Traps(Mid-Back)",
    exercises: [
      {
        id: 401,
        name: "Pull Up",
        equipment: "Bodyweight",
        target: "Traps/Mid-Back",
      },
      {
        id: 402,
        name: "Barbell Deadlift",
        equipment: "Barbell",
        target: "Traps/Mid-Back",
      },
      {
        id: 403,
        name: "Dumbbell Row",
        equipment: "Dumbbell",
        target: "Traps/Mid-Back",
      },
      {
        id: 404,
        name: "Incline Kettlebell Shrug",
        equipment: "Kettlebell",
        target: "Traps/Mid-Back",
      },
    ],
    about: [
      "The middle and lower traps are an important part of the trapezius muscle group, responsible for scapular retraction and depression.",
      "Building these muscles can improve posture, reduce the risk of injury, and enhance overall upper body strength.",
      "Consistency and proper recovery are key to achieving muscle growth and strength in the middle and lower traps.",
    ],
  },
  LowerBack: {
    id: 50,
    name: "Lower Back",
    exercises: [
      {
        id: 501,
        name: "Barbell Deadlift",
        equipment: "Barbell",
        target: "Lower Back",
      },
      {
        id: 502,
        name: "Back Hyperextension",
        equipment: "Machine",
        target: "Lower Back",
      },
      {
        id: 503,
        name: "Back Goodmorning",
        equipment: "Barbell",
        target: "Lower Back",
      },
      {
        id: 504,
        name: "Supermans",
        equipment: "Bodyweight",
        target: "Lower Back",
      },
    ],
    about: [
      "The lower back muscles are an essential part of the core and are important for overall strength, stability, and athletic performance.",
      "To build muscle in the lower back, it's important to use proper form and technique, and to gradually increase weight and intensity over time.",
      "However, it's important to not overtrain the lower back, as it can lead to injury or strain.",
    ],
  },
  Shoulders: {
    id: 60,
    name: "Shoulders",
    exercises: [
      {
        id: 601,
        name: "Overhead Press - Seated/Standing",
        equipment: "Barbell/Dumbbell",
        target: "Front/Middle Deltoids",
      },
      {
        id: 602,
        name: "Lateral Raise",
        equipment: "Dumbbell/Cable",
        target: "Middle Deltoids",
      },
      {
        id: 603,
        name: "Front Raise",
        equipment: "Dumbbell/Barbell",
        target: "Front Deltoids",
      },
      {
        id: 604,
        name: "Upright Row",
        equipment: "Barbell/Cable",
        target: "Front Deltoids",
      },
      {
        id: 605,
        name: "Arnold Press",
        equipment: "Dumbbell",
        target: "Front/Middle Deltoids",
      },
      {
        id: 606,
        name: "Reverse Fly",
        equipment: "Machine/Cable",
        target: "Rear Deltoids",
      },
      {
        id: 607,
        name: "Face Pull",
        equipment: "Cable",
        target: "Rear Deltoids",
      },
      {
        id: 608,
        name: "Shrugs",
        equipment: "Barbell/Dumbbell",
        target: "Trapezius",
      },
    ],
    about: [
      "The shoulders are a key muscle group for upper body strength and aesthetics.",
      "They consist of three heads of the deltoid muscle, which are the anterior (front), medial (middle), and posterior (rear) heads.",
      "It's important to note that overtraining the shoulders can lead to injury and should be avoided. It's recommended to incorporate shoulder exercises into a well-rounded strength training program that also includes exercises for other muscle groups, and to give the shoulders adequate rest and recovery time between workouts.",
    ],
  },
  Biceps: {
    id: 70,
    name: "Biceps",
    exercises: [
      {
        id: 701,
        name: "Barbell Curl",
        equipment: "Barbell",
        target: "Overall Biceps",
      },
      {
        id: 702,
        name: "Dumbbell Curl",
        equipment: "Dumbbell",
        target: "Overall Biceps",
      },
      {
        id: 703,
        name: "Hammer Curl",
        equipment: "Dumbbell",
        target: "Short Head",
      },
      {
        id: 704,
        name: "Preacher Curl",
        equipment: "Dumbbell/Barbell/Machine",
        target: "Long Head",
      },
      {
        id: 705,
        name: "Concentration Curl",
        equipment: "Dumbbell",
        target: "Short Head",
      },
      {
        id: 706,
        name: "Incline Curl",
        equipment: "Dumbbell",
        target: "Long Head",
      },
    ],
    about: [
      "When it comes to muscle building, the biceps are one of the most popular muscle groups to train, as they are visible and contribute to the overall aesthetics of the arm.",
      "The biceps muscle is composed of two heads, the long head and the short head. The long head is located on the outer portion of the upper arm and makes up the majority of the muscle mass, while the short head is located on the inner portion of the upper arm.",
    ],
  },
  Triceps: {
    id: 80,
    name: "Triceps",
    exercises: [
      {
        id: 801,
        name: "Triceps Pushdown",
        equipment: "Cable",
        target: "Lateral Head",
      },
      {
        id: 802,
        name: "Triceps Rope Extension",
        equipment: "Cable",
        target: "Long/Medial Head",
      },
      {
        id: 803,
        name: "Triceps Kickback",
        equipment: "Dumbbell",
        target: "Lateral/Medial Head",
      },
      {
        id: 804,
        name: "Triceps Dip",
        equipment: "Bodyweight",
        target: "Overall Triceps",
      },
      {
        id: 805,
        name: "Close Grip Bench Press",
        equipment: "Barbell",
        target: "Overall Triceps",
      },
      {
        id: 806,
        name: "Skullcrusher",
        equipment: "Barbell/Dumbbell",
        target: "Long/Medial Head",
      },
      {
        id: 807,
        name: "Overhead Extension",
        equipment: "Dumbbell",
        target: "Long/Lateral Head",
      },
    ],
    about: [
      "The triceps muscle is a three-headed muscle located at the back of the upper arm, and is responsible for extending the elbow joint.",
      "The long head of the triceps is primarily targeted by exercises that involve overhead arm movements. The lateral head is often targeted through exercises like tricep pushdowns and cable extensions, while the medial head is targeted through close-grip bench presses and dips.",
    ],
  },
  Forearms: {
    id: 90,
    name: "Forearms",
    exercises: [
      {
        id: 901,
        name: "Wrist Curl",
        equipment: "Barbell/Dumbbell",
        target: "Forearms",
      },
      {
        id: 902,
        name: "Reverse Wrist Curl",
        equipment: "Barbell/Dumbbell",
        target: "Forearms",
      },
      {
        id: 903,
        name: "Farmer's Walks",
        equipment: "Dumbbell/Kettlebell",
        target: "Forearms",
      },
    ],
    about: [
      "Forearm muscles are important for many daily activities, such as gripping and lifting objects.",
      "Well-developed forearms are also aesthetically pleasing and can improve the overall appearance of the upper body.",
      "It's important to gradually increase the weight and volume of these exercises over time to continue seeing progress.",
    ],
  },
  Abs: {
    id: 11,
    name: "Abs",
    exercises: [
      {
        id: 111,
        name: "Crunches",
        equipment: "Bodyweight",
        target: "Rectus Abdominis",
      },
      {
        id: 112,
        name: "Bicycle Crunches",
        equipment: "Bodyweight",
        target: "Rectus Abdominis",
      },
      {
        id: 113,
        name: "Cable Crunches",
        equipment: "Cable",
        target: "Rectus Abdominis",
      },
      {
        id: 114,
        name: "Leg Raises",
        equipment: "Bodyweight",
        target: "Rectus Abdominis",
      },
      {
        id: 115,
        name: "Hanging Leg Raises",
        equipment: "Bodyweight",
        target: "Rectus Abdominis",
      },
      {
        id: 116,
        name: "Sit Ups",
        equipment: "Bodyweight",
        target: "Rectus Abdominis",
      },
      {
        id: 117,
        name: "Plank",
        equipment: "Bodyweight",
        target: "Rectus Abdominis",
      },
      {
        id: 118,
        name: "Ab Roller",
        equipment: "Ab Roller",
        target: "Rectus Abdominis",
      },
    ],
    about: [
      "The rectus abdominis muscle, which is commonly referred to as the six-pack, is the main muscle group responsible for abdominal definition.",
      "In addition to exercises, proper nutrition and a low body fat percentage are important for achieving visible abs.",
      "Consistently following a structured workout routine and maintaining a calorie deficit can help to reduce body fat and reveal the underlying abdominal muscles.",
    ],
  },
  Obliques: {
    id: 12,
    name: "Obliques",
    exercises: [
      {
        id: 121,
        name: "Side Plank",
        equipment: "Bodyweight",
        target: "Obliques",
      },
      {
        id: 122,
        name: "Side Crunches",
        equipment: "Bodyweight",
        target: "Obliques",
      },
      {
        id: 123,
        name: "Russian Twist",
        equipment: "Dumbbell/Kettlebell",
        target: "Obliques",
      },
      {
        id: 124,
        name: "Bicycle Crunches",
        equipment: "Bodyweight",
        target: "Obliques",
      },
      {
        id: 125,
        name: "Woodchopper",
        equipment: "Dumbbell/Kettlebell",
        target: "Obliques",
      },
    ],
    about: [
      "The obliques are a group of abdominal muscles located on either side of the rectus abdominis muscle.",
      "To effectively target the obliques, exercises that involve twisting or bending sideways are often used.",
      "It's important to note that in order to see visible abs and obliques, a combination of strength training and a proper diet is necessary to reduce body fat percentage.",
    ],
  },
  Quads: {
    id: 13,
    name: "Quads",
    exercises: [
      {
        id: 131,
        name: "Squat",
        equipment: "Barbell/Dumbbell/Bodyweight",
        target: "Quadriceps",
      },
      {
        id: 132,
        name: "Leg Press",
        equipment: "Leg Press Machine",
        target: "Quadriceps",
      },
      {
        id: 133,
        name: "Leg Extension",
        equipment: "Leg Extension Machine",
        target: "Quadriceps",
      },
      {
        id: 134,
        name: "Front Squat",
        equipment: "Barbell/Dumbbell",
        target: "Quadriceps",
      },
      {
        id: 135,
        name: "Forward Lunges",
        equipment: "Barbell/Dumbbell",
        target: "Quadriceps",
      },
    ],
    about: [
      "The quadriceps are a large group of muscles located on the front of the thigh and are responsible for extending the knee joint.",
      "It is important to incorporate progressive overload into your training, gradually increasing the weight or resistance used over time to challenge your muscles and promote growth.",
    ],
  },
  Calves: {
    id: 14,
    name: "Calves",
    exercises: [
      {
        id: 141,
        name: "Standing Calf Raises",
        equipment: "Barbell/Bodyweight",
        target: "Calves",
      },
      {
        id: 142,
        name: "Seated Calf Raises",
        equipment: "Machine",
        target: "Calves",
      },
      {
        id: 143,
        name: "Donkey Calf Raises",
        equipment: "Bodyweight",
        target: "Calves",
      },
      {
        id: 144,
        name: "Kettlebell Single Leg Calf Raises",
        equipment: "Kettlebell",
        target: "Calves",
      },
    ],
    about: [
      "Calves are a muscle group located at the back of the lower leg, and they consist of two main muscles.",
      "Building strong and defined calves is an important part of overall lower body development, as well as improving balance and athletic performance.",
      "In addition to traditional resistance exercises, incorporating plyometric exercises such as jumping and bounding can also be beneficial for improving explosive power and muscle endurance in the calves.",
    ],
  },
  Hamstrings: {
    id: 15,
    name: "Hamstrings",
    exercises: [
      {
        id: 151,
        name: "Stiff Leg Deadlift",
        equipment: "Barbell",
        target: "Hamstrings",
      },
      {
        id: 152,
        name: "Romanian Deadlift",
        equipment: "Barbell/Dumbbell",
        target: "Hamstrings",
      },
      {
        id: 153,
        name: "Leg Curl",
        equipment: "Machine",
        target: "Hamstrings",
      },
      {
        id: 154,
        name: "Glute Ham Raise",
        equipment: "Bodyweight",
        target: "Hamstrings",
      },
    ],
    about: [
      "The hamstrings are a group of three muscles located at the back of the thigh.",
      "In addition, strong hamstrings can help prevent knee injuries and improve overall athletic performance.",
      "It's important to gradually increase the weight and volume of these exercises over time to continue seeing progress.",
    ],
  },
  Glutes: {
    id: 16,
    name: "Glutes",
    exercises: [
      {
        id: 161,
        name: "Barbell Squat",
        equipment: "Barbell",
        target: "Glutes",
      },
      {
        id: 162,
        name: "Barbell Hip Thrust",
        equipment: "Barbell",
        target: "Glutes",
      },
      {
        id: 163,
        name: "Barbell Deadlift",
        equipment: "Barbell",
        target: "Glutes",
      },
      {
        id: 164,
        name: "Lunges",
        equipment: "Bodyweight",
        target: "Glutes",
      },
    ],
    about: [
      "The glutes are a group of muscles located in the buttocks.",
      "Building strong glutes is important not only for aesthetic purposes but also for functional movement and overall health.",
    ],
  },
};
