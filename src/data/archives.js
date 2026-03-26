export const categories = [
  { id: "all", label: "All" },
  { id: "pure", label: "Pure Mathematics" },
  { id: "applied", label: "Applied Mathematics" },
  { id: "education", label: "Mathematics Education" },
  { id: "supporting", label: "Supporting Courses" },
];

export const years = [
  { id: "all", label: "All Years" },
  { id: "1", label: "1st Year · Foundation" },
  { id: "2", label: "2nd Year · Expanding" },
  { id: "3", label: "3rd Year · Advanced" },
  { id: "4", label: "4th Year · Specialization" },
];

export const archives = [
  // ─── FIRST YEAR · PURE MATHEMATICS ───────────────────────────────────────
  {
    title: "Elementary Algebra",
    description:
      "Linear equations and inequalities, systems of equations, polynomials, rational and radical expressions and equations.",
    url: "https://open.umn.edu/opentextbooks/textbooks/13",
    image: "",
    category: "pure",
    year: "1",
  },
  {
    title: "Intermediate Algebra",
    description:
      "Quadratic equations, functions and their graphs, inverse and composite functions, exponential and logarithmic functions, sequences and series.",
    url: "https://open.umn.edu/opentextbooks/textbooks/134",
    image: "",
    category: "pure",
    year: "1",
  },
  {
    title: "Plane Euclidean Geometry",
    description:
      "Basic postulates, triangles, quadrilaterals, polygons, circles, and geometric proofs with logical reasoning.",
    url: "https://openstax.org/details/books/geometry",
    image: "",
    category: "pure",
    year: "1",
  },
  {
    title: "Analytic Geometry (Basics)",
    description:
      "Cartesian coordinate system, distance and midpoint formulas, equations of lines, parallel and perpendicular lines, and introduction to conic sections.",
    url: "https://www.khanacademy.org/math/geometry-home/analytic-geometry-topic",
    image: "",
    category: "pure",
    year: "1",
  },
  {
    title: "Pre-Calculus",
    description:
      "Trigonometric functions, inverse trig functions, trigonometric equations, applications to triangles and bearings, polar coordinates and parametric equations.",
    url: "https://www.khanacademy.org/math/precalculus",
    image: "",
    category: "pure",
    year: "1",
  },

  // ─── FIRST YEAR · APPLIED MATHEMATICS ────────────────────────────────────
  {
    title: "Basic Statistics & Probability",
    description:
      "Descriptive statistics, measures of dispersion, graphical data representation, probability rules, and counting principles including permutations and combinations.",
    url: "https://openstax.org/details/books/introductory-statistics",
    image: "",
    category: "applied",
    year: "1",
  },

  // ─── FIRST YEAR · MATHEMATICS EDUCATION ──────────────────────────────────
  {
    title: "Introduction to Teaching",
    description:
      "Roles and ethics of the teaching profession, historical and philosophical foundations of education, the Philippine educational system, and current trends.",
    url: "https://www.thoughtco.com/an-introduction-to-teaching-8007",
    image: "",
    category: "education",
    year: "1",
  },
  {
    title: "Principles of Education",
    description:
      "Learning theories (behaviorism, cognitivism, constructivism, humanism), effective teaching principles, classroom management, and student diversity.",
    url: "https://www.21kschool.com/us/blog/principles-of-education/",
    image: "",
    category: "education",
    year: "1",
  },
  {
    title: "Child & Adolescent Development",
    description:
      "Physical, cognitive, social, and emotional development across developmental stages, influencing factors, and implications for educational practice.",
    url: "https://courses.lumenlearning.com/suny-lifespandevelopment/",
    image: "",
    category: "education",
    year: "1",
  },

  // ─── FIRST YEAR · SUPPORTING COURSES ─────────────────────────────────────
  {
    title: "Communication Skills",
    description:
      "English and Filipino communication covering listening, speaking, reading, writing, and technical report preparation.",
    url: "https://www.skillsyouneed.com/ips/communication-skills.html",
    image: "",
    category: "supporting",
    year: "1",
  },
  {
    title: "Natural Sciences",
    description:
      "Basic physics, chemistry, and earth science covering motion, energy, matter, elements, compounds, and earth's structure and processes.",
    url: "https://www.britannica.com/science/natural-science",
    image: "",
    category: "supporting",
    year: "1",
  },
  {
    title: "Computer Fundamentals",
    description:
      "Hardware and software basics, operating systems, file management, word processing, spreadsheets, presentations, and internet safety.",
    url: "https://edu.gcfglobal.org/en/computerbasics/",
    image: "",
    category: "supporting",
    year: "1",
  },

  // ─── SECOND YEAR · PURE MATHEMATICS ──────────────────────────────────────
  {
    title: "Advanced Algebra",
    description:
      "Matrices, systems of linear equations using matrix methods and Cramer's rule, complex numbers, polynomial functions, and polynomial/rational/absolute value inequalities.",
    url: "#",
    image: "",
    category: "pure",
    year: "2",
  },
  {
    title: "Solid Geometry",
    description:
      "3D shapes including prisms, pyramids, cylinders, cones and spheres; surface area, volume, spatial relationships, and coordinate geometry in three dimensions.",
    url: "#",
    image: "",
    category: "pure",
    year: "2",
  },
  {
    title: "Differential Calculus",
    description:
      "Limits, continuity, differentiation rules, derivatives of trig/exponential/logarithmic functions, and applications including optimization and curve sketching.",
    url: "#",
    image: "",
    category: "pure",
    year: "2",
  },
  {
    title: "Linear Algebra",
    description:
      "Vector spaces, linear transformations, eigenvalues and eigenvectors, inner product spaces, and orthogonality.",
    url: "#",
    image: "",
    category: "pure",
    year: "2",
  },

  // ─── SECOND YEAR · APPLIED MATHEMATICS ───────────────────────────────────
  {
    title: "Inferential Statistics",
    description:
      "Sampling techniques, estimation, hypothesis testing (z-tests, t-tests, chi-square, ANOVA), and simple linear regression and correlation.",
    url: "#",
    image: "",
    category: "applied",
    year: "2",
  },
  {
    title: "Discrete Mathematics",
    description:
      "Set theory, propositional and predicate logic, combinatorics, recurrence relations, and Boolean algebra and logic gates.",
    url: "#",
    image: "",
    category: "applied",
    year: "2",
  },

  // ─── SECOND YEAR · MATHEMATICS EDUCATION ─────────────────────────────────
  {
    title: "Pedagogy of Mathematics I",
    description:
      "Teaching strategies for basic math, lesson planning, instructional materials development, questioning techniques, and differentiated instruction.",
    url: "#",
    image: "",
    category: "education",
    year: "2",
  },
  {
    title: "Educational Technology",
    description:
      "Technology integration in math teaching, educational software (GeoGebra, Desmos, Excel), digital platforms, and designing technology-enhanced learning activities.",
    url: "#",
    image: "",
    category: "education",
    year: "2",
  },
  {
    title: "Assessment & Evaluation",
    description:
      "Principles of assessment, types of assessment (formative, summative, diagnostic, authentic), designing tools, grading, and using data to improve teaching.",
    url: "#",
    image: "",
    category: "education",
    year: "2",
  },

  // ─── SECOND YEAR · SUPPORTING COURSES ────────────────────────────────────
  {
    title: "Programming for Mathematics",
    description:
      "Programming fundamentals, introduction to Python or C++, mathematical computations including equation solving and graph plotting, and basic algorithms.",
    url: "#",
    image: "",
    category: "supporting",
    year: "2",
  },
  {
    title: "General Physics",
    description:
      "Mechanics, thermodynamics, waves and optics, electromagnetism, and mathematical applications in physics.",
    url: "#",
    image: "",
    category: "supporting",
    year: "2",
  },

  // ─── THIRD YEAR · PURE MATHEMATICS ───────────────────────────────────────
  {
    title: "Integral Calculus",
    description:
      "Indefinite and definite integrals, integration techniques, the Fundamental Theorem of Calculus, applications to areas and volumes, and improper integrals.",
    url: "#",
    image: "",
    category: "pure",
    year: "3",
  },
  {
    title: "Multivariable Calculus",
    description:
      "Functions of several variables, partial derivatives, multiple integrals, line and surface integrals, and Green's, Stokes', and Divergence theorems.",
    url: "#",
    image: "",
    category: "pure",
    year: "3",
  },
  {
    title: "Abstract Algebra",
    description:
      "Groups, cyclic and permutation groups, homomorphisms and isomorphisms, rings, and fields with definitions, examples, and properties.",
    url: "#",
    image: "",
    category: "pure",
    year: "3",
  },
  {
    title: "Real Analysis",
    description:
      "Real number system, sequences, series and convergence tests, continuity, differentiability, and integrability of real-valued functions.",
    url: "#",
    image: "",
    category: "pure",
    year: "3",
  },
  {
    title: "Number Theory",
    description:
      "Divisibility, prime numbers, congruences, Diophantine equations, number systems, and applications in cryptography.",
    url: "#",
    image: "",
    category: "pure",
    year: "3",
  },

  // ─── THIRD YEAR · APPLIED MATHEMATICS ────────────────────────────────────
  {
    title: "Mathematical Statistics",
    description:
      "Probability distributions (discrete and continuous), sampling distributions, estimation theory, hypothesis testing power, and experimental design.",
    url: "#",
    image: "",
    category: "applied",
    year: "3",
  },
  {
    title: "Mathematical Modeling",
    description:
      "Model formulation, deterministic and stochastic model types, model analysis and validation, and applications across physical, social, and engineering domains.",
    url: "#",
    image: "",
    category: "applied",
    year: "3",
  },
  {
    title: "Graph Theory",
    description:
      "Graphs, trees and spanning trees, paths and connectivity, graph coloring, and applications in networks, scheduling, and routing.",
    url: "#",
    image: "",
    category: "applied",
    year: "3",
  },

  // ─── THIRD YEAR · MATHEMATICS EDUCATION ──────────────────────────────────
  {
    title: "Pedagogy of Mathematics II",
    description:
      "Teaching advanced math topics, developing problem-solving skills, mathematical communication, teaching students with special needs, and real-world integration.",
    url: "#",
    image: "",
    category: "education",
    year: "3",
  },
  {
    title: "Curriculum Design in Mathematics",
    description:
      "Curriculum design principles, K-12 mathematics curriculum in the Philippines, curriculum alignment, designing learning modules, and curriculum evaluation.",
    url: "#",
    image: "",
    category: "education",
    year: "3",
  },
  {
    title: "Inclusive Education in Math",
    description:
      "Principles of inclusive education, identifying and addressing learning difficulties, adapting instruction for diverse learners, and promoting equity in mathematics.",
    url: "#",
    image: "",
    category: "education",
    year: "3",
  },
  {
    title: "History & Philosophy of Mathematics",
    description:
      "Evolution of mathematical concepts, contributions of major mathematicians, philosophical foundations (logicism, formalism, intuitionism), and the cultural role of mathematics.",
    url: "#",
    image: "",
    category: "education",
    year: "3",
  },

  // ─── THIRD YEAR · SUPPORTING COURSES ─────────────────────────────────────
  {
    title: "Advanced Computer-Aided Mathematics",
    description:
      "Advanced use of GeoGebra, MATLAB, or R for modeling, data analysis, interactive materials creation, and advanced mathematical computations.",
    url: "#",
    image: "",
    category: "supporting",
    year: "3",
  },
  {
    title: "Non-Euclidean Geometry (Elective)",
    description:
      "Spherical geometry, hyperbolic geometry, and basic properties of non-Euclidean systems.",
    url: "#",
    image: "",
    category: "pure",
    year: "3",
  },
  {
    title: "Differential Equations (Elective)",
    description:
      "Ordinary differential equations, first-order equations, and linear systems.",
    url: "#",
    image: "",
    category: "pure",
    year: "3",
  },
  {
    title: "Operations Research (Elective)",
    description:
      "Linear programming, transportation problems, and assignment problems.",
    url: "#",
    image: "",
    category: "applied",
    year: "3",
  },
  {
    title: "Cryptography (Elective)",
    description:
      "Basic principles of cryptography, encryption, and decryption techniques.",
    url: "#",
    image: "",
    category: "applied",
    year: "3",
  },

  // ─── FOURTH YEAR · PURE MATHEMATICS ──────────────────────────────────────
  {
    title: "Complex Analysis",
    description:
      "Complex functions, analytic functions, contour integrals, and the residue theorem.",
    url: "#",
    image: "",
    category: "pure",
    year: "4",
  },
  {
    title: "Functional Analysis",
    description:
      "Normed spaces, Banach spaces, Hilbert spaces, and linear operators.",
    url: "#",
    image: "",
    category: "pure",
    year: "4",
  },
  {
    title: "Partial Differential Equations",
    description:
      "Partial differential equations, boundary value problems, and their applications.",
    url: "#",
    image: "",
    category: "pure",
    year: "4",
  },
  {
    title: "Topology (Elective)",
    description:
      "Basic concepts of point-set topology, continuity, and connectedness.",
    url: "#",
    image: "",
    category: "pure",
    year: "4",
  },
  {
    title: "Algebraic Geometry (Elective)",
    description:
      "Introduction to algebraic varieties and algebraic equations.",
    url: "#",
    image: "",
    category: "pure",
    year: "4",
  },
  {
    title: "Advanced Number Theory (Elective)",
    description:
      "Advanced topics including algebraic number theory and analytic number theory.",
    url: "#",
    image: "",
    category: "pure",
    year: "4",
  },

  // ─── FOURTH YEAR · APPLIED MATHEMATICS ───────────────────────────────────
  {
    title: "Advanced Probability & Statistics",
    description:
      "Multivariate probability distributions, Bayesian statistics, nonparametric statistics, time series analysis, and statistical software (R or SPSS).",
    url: "#",
    image: "",
    category: "applied",
    year: "4",
  },
  {
    title: "Operations Research Basics",
    description:
      "Linear programming (simplex method, duality), network analysis (PERT/CPM), inventory theory, and decision theory under uncertainty and risk.",
    url: "#",
    image: "",
    category: "applied",
    year: "4",
  },

  // ─── FOURTH YEAR · MATHEMATICS EDUCATION ─────────────────────────────────
  {
    title: "Research in Mathematics Education",
    description:
      "Research methods (quantitative, qualitative, mixed), research designs, data collection and analysis, and writing research proposals and reports.",
    url: "#",
    image: "",
    category: "education",
    year: "4",
  },
  {
    title: "Seminar in Math Education",
    description:
      "Current trends and issues in mathematics education, presentation of research findings, best teaching practices, and professional development.",
    url: "#",
    image: "",
    category: "education",
    year: "4",
  },
  {
    title: "Student Teaching (Field Practice)",
    description:
      "Classroom observation, lesson planning and implementation, classroom management, student assessment, reflection, and collaboration with mentor teachers.",
    url: "#",
    image: "",
    category: "education",
    year: "4",
  },
];