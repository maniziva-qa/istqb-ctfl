// ISTQB CTFL v4.0 - Complete Study Data
// Syllabus, Questions, and Answers

const SYLLABUS = {
  chapters: [
    {
      id: 1,
      title: "Fundamentals of Testing",
      duration: "180 minutes",
      examQuestions: 8,
      color: "#4f46e5",
      sections: [
        {
          id: "1.1",
          title: "What is Testing?",
          content: `Testing is a set of activities to discover defects and evaluate the quality of software artifacts. Test objectives include:
• Finding defects before deployment
• Verifying requirements are met
• Validating the system works for user needs
• Reducing risk of failure in operation
• Building confidence in quality
• Providing information for decision-making`,
          keyTerms: ["test objective", "testing", "validation", "verification", "test basis", "test object"]
        },
        {
          id: "1.2",
          title: "Why is Testing Necessary?",
          content: `Testing is necessary because:
• Human errors (mistakes) → defects in code/documents → failures in software
• Defects can cause financial losses, reputation damage, injury, or death
• Testing reduces risk of undetected failures

Error → Defect → Failure chain:
• ERROR: Human mistake (e.g., developer misunderstands requirement)
• DEFECT: Flaw in the code or document (introduced by error)
• FAILURE: System behaves incorrectly during execution (caused by defect)
• ROOT CAUSE: Fundamental reason why an error was made

Testing vs. QA:
• QA = process-oriented (improving the development process)
• Testing = product-oriented (finding defects in the product)`,
          keyTerms: ["error", "defect", "failure", "root cause", "quality assurance", "coverage"]
        },
        {
          id: "1.3",
          title: "Seven Testing Principles",
          content: `1. Testing shows the PRESENCE of defects, not their ABSENCE
   → Testing can show defects exist, but cannot prove there are none

2. EXHAUSTIVE testing is impossible
   → Testing everything (all inputs, combinations) is infeasible; use risk & priorities

3. EARLY testing saves time and money (Shift-Left)
   → Finding defects earlier in SDLC is cheaper to fix

4. DEFECTS CLUSTER together (Pareto Principle)
   → Small number of modules contain most defects; focus testing there

5. Tests WEAR OUT (Pesticide Paradox)
   → Running same tests repeatedly stops finding new defects; update tests regularly

6. Testing is CONTEXT-DEPENDENT
   → Testing a medical device ≠ testing a mobile app; context determines approach

7. ABSENCE-OF-ERRORS fallacy
   → Even a defect-free system can be unusable if it doesn't meet user needs`,
          keyTerms: ["testing principles", "pesticide paradox", "exhaustive testing", "defect clustering"]
        },
        {
          id: "1.4",
          title: "Test Activities, Testware and Test Roles",
          content: `Test Activities (in order):
1. PLANNING: Define scope, objectives, approach, resources, schedule, entry/exit criteria
2. ANALYSIS: Identify what to test (test conditions) from the test basis
3. DESIGN: Create test cases, test data, test procedures
4. IMPLEMENTATION: Prepare test scripts, organize test suites, set up environment
5. EXECUTION: Run tests, compare actual vs expected results, log defects
6. COMPLETION: Archive testware, analyze lessons learned, finalize reports

Testware (artifacts produced):
• Test plans, test conditions, test cases, test scripts
• Test data, test execution schedules, defect reports, test completion reports

Traceability: Link test cases ↔ requirements to ensure coverage and impact analysis

Roles:
• TEST MANAGER: Planning, monitoring, control, reporting
• TESTER: Analysis, design, implementation, execution`,
          keyTerms: ["test planning", "test analysis", "test design", "test implementation", "test execution", "test completion", "testware", "traceability", "debugging"]
        },
        {
          id: "1.5",
          title: "Essential Skills and Good Practices in Testing",
          content: `Generic tester skills:
• Domain knowledge (understand what system should do)
• Technical knowledge (understand code, tools)
• Critical thinking and analytical skills
• Communication skills (clear defect reports, stakeholder collaboration)
• Attention to detail
• Being a good team player

Whole Team Approach:
• Quality is everyone's responsibility (not just testers)
• Testers work WITH developers and business reps
• Business reps help create acceptance tests
• Developers help identify testable requirements

Independence of Testing (levels):
1. Author tests own code (least independent)
2. Peer review / developer tests others' code
3. Dedicated test team within project
4. Separate test department
5. External testing organization (most independent)

Benefits of independence: Different perspective, less assumption bias
Drawbacks: Communication overhead, not part of development, may slow feedback`,
          keyTerms: ["whole team approach", "independence of testing", "generic skills"]
        }
      ],
      learningObjectives: [
        { code: "FL-1.1.1", level: "K1", text: "Identify typical test objectives" },
        { code: "FL-1.1.2", level: "K2", text: "Differentiate testing from debugging" },
        { code: "FL-1.2.1", level: "K2", text: "Exemplify why testing is necessary" },
        { code: "FL-1.2.2", level: "K1", text: "Recall the relation between testing and quality assurance" },
        { code: "FL-1.2.3", level: "K2", text: "Distinguish between root cause, error, defect, and failure" },
        { code: "FL-1.3.1", level: "K2", text: "Explain the seven testing principles" },
        { code: "FL-1.4.1", level: "K2", text: "Summarize the different test activities and tasks" },
        { code: "FL-1.4.2", level: "K2", text: "Explain the impact of context on the test process" },
        { code: "FL-1.4.3", level: "K2", text: "Differentiate the testware that supports the test activities" },
        { code: "FL-1.4.4", level: "K2", text: "Explain the value of maintaining traceability" },
        { code: "FL-1.4.5", level: "K2", text: "Compare the different roles in testing" },
        { code: "FL-1.5.1", level: "K2", text: "Give examples of the generic skills required for testing" },
        { code: "FL-1.5.2", level: "K1", text: "Recall the advantages of the whole team approach" },
        { code: "FL-1.5.3", level: "K2", text: "Distinguish the benefits and drawbacks of independence of testing" }
      ]
    },
    {
      id: 2,
      title: "Testing Throughout the SDLC",
      duration: "130 minutes",
      examQuestions: 6,
      color: "#0891b2",
      sections: [
        {
          id: "2.1",
          title: "Testing in the Context of a Software Development Lifecycle",
          content: `Good practices for ALL SDLCs:
• Every development activity has a corresponding test activity
• Define test objectives and scope as early as possible
• Testers review work products (specs, designs) as soon as drafts available
• Tests are written before or during development (not only after)

Test-First Approaches:
• TDD (Test-Driven Development): Write unit tests BEFORE code → code to make tests pass → refactor
• ATDD (Acceptance TDD): Write acceptance tests from user stories BEFORE development
• BDD (Behavior-Driven Development): Tests written in Given/When/Then format (natural language)

DevOps Impact on Testing:
• CI/CD pipeline: automated tests run on every commit
• Fast feedback loops: developers get test results quickly
• Shift-left: test earlier; Shift-right: test in production (monitoring, A/B testing)
• Shared responsibility for quality across dev and ops

Shift-Left:
• Testing earlier = cheaper defect fixes
• Examples: reviewing specs, writing tests before code, running tests in dev environment

Retrospectives:
• Team meetings at end of iteration/release
• Identify: what went well, what to improve
• Output: process improvement actions for next iteration`,
          keyTerms: ["SDLC", "TDD", "ATDD", "BDD", "DevOps", "shift-left", "CI/CD", "retrospective"]
        },
        {
          id: "2.2",
          title: "Test Levels and Test Types",
          content: `TEST LEVELS (by scope):
1. COMPONENT (Unit) Testing: Individual components in isolation; white-box focus; developer-run
2. COMPONENT INTEGRATION Testing: Interactions between components; interfaces and data flow
3. SYSTEM Testing: Entire system end-to-end; black-box focus; independent test team
4. SYSTEM INTEGRATION Testing: Interactions between systems/external services/APIs
5. ACCEPTANCE Testing: Validates system meets business/user needs; run by users/customers
   - Types: UAT (user), OAT (operational), Alpha, Beta, Regulatory

TEST TYPES (by what is tested):
• FUNCTIONAL: What system does — features, workflows, business rules
• NON-FUNCTIONAL: How well system works — performance, security, usability, reliability, compatibility
• STRUCTURAL (White-box): Internal code structure — code coverage, branch coverage
• CHANGE-RELATED:
  - CONFIRMATION testing: Re-test a fixed defect to verify fix works
  - REGRESSION testing: Re-test unchanged parts after a change to detect side effects`,
          keyTerms: ["component testing", "integration testing", "system testing", "acceptance testing", "functional testing", "non-functional testing", "regression testing", "confirmation testing", "black-box testing", "white-box testing"]
        },
        {
          id: "2.3",
          title: "Maintenance Testing",
          content: `Maintenance Testing: Testing an existing system after changes are made to it.

Triggers for maintenance testing:
• MODIFICATION: Bug fixes, enhancements, new features, upgrades
• MIGRATION: Moving to new platform, OS, or database
• RETIREMENT: Decommissioning a system (archive, data migration testing)

Impact Analysis: Before testing, identify what was changed and what could be affected.
• Determines scope of regression testing needed
• Uses traceability (test cases ↔ requirements ↔ code)

Maintenance testing is more complex because:
• Incomplete documentation may exist
• Original testers may not be available
• Risk of regression is high`,
          keyTerms: ["maintenance testing", "impact analysis", "regression testing"]
        }
      ],
      learningObjectives: [
        { code: "FL-2.1.1", level: "K2", text: "Explain the impact of the chosen SDLC on testing" },
        { code: "FL-2.1.2", level: "K1", text: "Recall good testing practices that apply to all SDLCs" },
        { code: "FL-2.1.3", level: "K1", text: "Recall the examples of test-first approaches to development" },
        { code: "FL-2.1.4", level: "K2", text: "Summarize how DevOps might have an impact on testing" },
        { code: "FL-2.1.5", level: "K2", text: "Explain the shift-left approach" },
        { code: "FL-2.1.6", level: "K2", text: "Explain how retrospectives can be used for process improvement" },
        { code: "FL-2.2.1", level: "K2", text: "Distinguish the different test levels" },
        { code: "FL-2.2.2", level: "K2", text: "Distinguish the different test types" },
        { code: "FL-2.2.3", level: "K2", text: "Distinguish confirmation testing from regression testing" },
        { code: "FL-2.3.1", level: "K2", text: "Summarize maintenance testing and its triggers" }
      ]
    },
    {
      id: 3,
      title: "Static Testing",
      duration: "80 minutes",
      examQuestions: 4,
      color: "#059669",
      sections: [
        {
          id: "3.1",
          title: "Static Testing Basics",
          content: `Static Testing: Examining work products WITHOUT executing code.
Dynamic Testing: Testing by RUNNING the software.

What can be statically tested:
• Requirements, user stories, acceptance criteria
• Architecture/design documents
• Source code
• Test plans, test cases, test scripts
• Project plans, schedules, budgets
• Configuration management data

Value of Static Testing:
• Find defects EARLIER (before code is run) → cheaper to fix
• Find defects that dynamic testing cannot (unreachable code, security vulnerabilities in logic)
• Improve quality of documentation and communication
• Detect missing, inconsistent, or ambiguous requirements
• Reduce overall project cost`,
          keyTerms: ["static testing", "dynamic testing", "static analysis", "anomaly"]
        },
        {
          id: "3.2",
          title: "Feedback and Review Process",
          content: `Early & Frequent Stakeholder Feedback Benefits:
• Avoids requirements misunderstandings before development begins
• Ensures alignment between team and stakeholders
• Reduces costly rework

Review Process Activities:
1. PLANNING: Define scope, effort, reviewers, entry/exit criteria
2. REVIEW INITIATION: Distribute documents, explain objectives, check entry criteria
3. INDIVIDUAL REVIEW: Each reviewer examines the work product independently
4. COMMUNICATION & ANALYSIS: Discuss findings, agree on status of anomalies
5. FIXING & REPORTING: Author fixes defects found; re-review if needed
6. CLOSURE: Check exit criteria met, archive artifacts

Review Roles:
• MANAGER: Plans and makes decisions about reviews
• AUTHOR: Creates work product, incorporates fixes
• MODERATOR/FACILITATOR: Runs the review meeting, ensures it stays on track
• REVIEW LEADER: Organizes the review, selects reviewers
• REVIEWERS: Examine the work product for defects
• SCRIBE (Recorder): Documents anomalies and action items during review

Review Types (least to most formal):
1. INFORMAL REVIEW: No defined process; flexible; peer feedback; no scribe required
2. WALKTHROUGH: Led by AUTHOR; purpose = learning/finding defects; scribe present; informal prep
3. TECHNICAL REVIEW: Led by MODERATOR (not author); individual preparation required; focuses on technical quality; produces review report
4. INSPECTION: Most formal; moderator NOT author; entry/exit criteria; metrics collected; checklists used; formal defect logging

Success Factors for Reviews:
• Clear, pre-defined objectives
• Right people chosen as reviewers (domain expertise)
• Adequate preparation time given
• Management support for the review culture
• Defects welcomed, not penalized (culture of quality)
• Issues addressed objectively (not personal criticism)
• Checklists used where helpful`,
          keyTerms: ["review", "inspection", "walkthrough", "technical review", "informal review", "formal review", "anomaly", "moderator", "author", "scribe"]
        }
      ],
      learningObjectives: [
        { code: "FL-3.1.1", level: "K1", text: "Recognize types of products that can be examined by static testing" },
        { code: "FL-3.1.2", level: "K2", text: "Explain the value of static testing" },
        { code: "FL-3.1.3", level: "K2", text: "Compare and contrast static and dynamic testing" },
        { code: "FL-3.2.1", level: "K1", text: "Identify the benefits of early and frequent stakeholder feedback" },
        { code: "FL-3.2.2", level: "K2", text: "Summarize the activities of the review process" },
        { code: "FL-3.2.3", level: "K1", text: "Recall responsibilities assigned to principal roles in reviews" },
        { code: "FL-3.2.4", level: "K2", text: "Compare and contrast the different review types" },
        { code: "FL-3.2.5", level: "K1", text: "Recall the factors that contribute to a successful review" }
      ]
    },
    {
      id: 4,
      title: "Test Analysis and Design",
      duration: "390 minutes",
      examQuestions: 11,
      color: "#dc2626",
      sections: [
        {
          id: "4.1",
          title: "Test Technique Overview",
          content: `Three Categories of Test Techniques:

BLACK-BOX techniques (specification-based):
• Based on EXTERNAL behavior — what system should do
• Test basis = requirements, specs, user stories
• No knowledge of internal code needed
• Includes: EP, BVA, Decision Tables, State Transition

WHITE-BOX techniques (structure-based):
• Based on INTERNAL code structure — how system works
• Test basis = code, architecture, data flow
• Requires code knowledge
• Includes: Statement Coverage, Branch Coverage

EXPERIENCE-BASED techniques:
• Based on tester's knowledge, intuition, past experience
• No formal test basis required
• Includes: Error Guessing, Exploratory Testing, Checklist-based`,
          keyTerms: ["black-box test technique", "white-box test technique", "experience-based test technique", "coverage", "coverage item"]
        },
        {
          id: "4.2",
          title: "Black-Box Test Techniques",
          content: `EQUIVALENCE PARTITIONING (EP):
• Divide inputs/outputs into PARTITIONS where values are treated identically
• If one value in partition fails → all fail; if passes → all pass
• Types: Valid partitions (accepted input) and Invalid partitions (rejected)
• 100% EP coverage = each partition tested at least once (1 test per partition)
• Example: Age field 18-65 valid → partitions: <18 (invalid), 18-65 (valid), >65 (invalid)

BOUNDARY VALUE ANALYSIS (BVA):
• Tests at the BOUNDARIES of partitions (most errors occur at edges)
• 2-value BVA: Test MIN and MAX of each partition
• 3-value BVA: Test MIN-1, MIN, MAX, MAX+1 of each partition (more thorough)
• Example: Valid range 18-65 → 2-value: test 18 and 65; 3-value: test 17, 18, 65, 66

DECISION TABLE TESTING:
• For systems with COMBINATIONS of conditions causing different actions
• Conditions = rows (inputs/rules); Actions = rows (outputs); Rules = columns
• Full table: 2^n rules for n boolean conditions
• Collapse redundant rules (don't-care conditions)
• 100% coverage = each rule (column) tested at least once

STATE TRANSITION TESTING:
• Model system as: States → Transitions (events/guards) → Actions
• Coverage levels:
  - All STATES coverage (minimum): every state visited
  - All TRANSITIONS coverage: every valid transition exercised (most common target)
  - All INVALID transitions: test what happens with unexpected inputs in each state
• Minimum test cases = number of test cases needed to cover all valid transitions
• State table = grid of states × events showing next state and action`,
          keyTerms: ["equivalence partitioning", "boundary value analysis", "decision table testing", "state transition testing", "acceptance criteria"]
        },
        {
          id: "4.3",
          title: "White-Box Test Techniques",
          content: `STATEMENT TESTING:
• Goal: Execute every EXECUTABLE STATEMENT at least once
• Statement coverage (%) = (statements executed / total statements) × 100
• 100% statement coverage does NOT mean all paths are covered
• A defect in an executed statement will be found; in an unexecuted statement, won't

BRANCH TESTING:
• Goal: Exercise every BRANCH (decision outcome) at least once
• Branches = outcomes of decision points (if-true, if-false, each case in switch)
• Branch coverage SUBSUMES statement coverage (100% branch → 100% statement)
• Branch coverage (%) = (branches covered / total branches) × 100

Value of White-Box Testing:
• Ensures all code is exercised (find dead code, unused paths)
• Supplements black-box testing
• Verifies actual code behavior vs. specifications
• Helps detect paths not covered by requirements (gaps)`,
          keyTerms: ["statement coverage", "branch coverage", "white-box test technique"]
        },
        {
          id: "4.4",
          title: "Experience-Based Test Techniques",
          content: `ERROR GUESSING:
• Tester uses knowledge of: past defects, common developer mistakes, domain expertise
• Create a list of "possible errors/defects/failures" and design tests targeting them
• Sources: personal experience, defect databases, historical data
• NOT random — systematic use of knowledge

EXPLORATORY TESTING:
• Simultaneous learning, test design, and test execution
• Use TEST CHARTERS: define scope, objectives, time limit
• Best when: requirements are incomplete/missing, time is limited, tester has deep domain knowledge
• Tester learns about system while testing it
• Results vary by tester; less repeatable than scripted testing

CHECKLIST-BASED TESTING:
• Use pre-prepared checklists of conditions to check
• Checklists derived from: experience, standards, regulations, common failures
• Flexible — items can be adapted to specific context
• Supports consistency across multiple test runs
• Less detailed than formal test cases`,
          keyTerms: ["error guessing", "exploratory testing", "checklist-based testing"]
        },
        {
          id: "4.5",
          title: "Collaboration-based Test Approaches",
          content: `USER STORY FORMAT:
"As a [role/persona], I want [feature/goal], so that [business value/benefit]"

INVEST Criteria for good user stories:
• I – Independent (not dependent on other stories)
• N – Negotiable (details can be discussed)
• V – Valuable (delivers value to user/business)
• E – Estimable (team can estimate effort)
• S – Small (fits in one sprint/iteration)
• T – Testable (clear acceptance criteria exist)

ACCEPTANCE CRITERIA formats:
1. SCENARIO-BASED (BDD style): Given [context] / When [event] / Then [outcome]
2. RULE-BASED: List of rules/conditions that must hold (e.g., "Price must not be negative")

ATDD (Acceptance Test-Driven Development):
• Write acceptance tests BEFORE development starts
• Tests derived from acceptance criteria (Given/When/Then)
• Creates shared understanding between dev, test, and business
• Tests serve as living documentation
• Steps: Discover (discuss) → Formulate (write AC) → Automate (create tests) → Develop`,
          keyTerms: ["acceptance criteria", "ATDD", "BDD", "user story", "collaboration-based test approach"]
        }
      ],
      learningObjectives: [
        { code: "FL-4.1.1", level: "K2", text: "Distinguish black-box, white-box, and experience-based test techniques" },
        { code: "FL-4.2.1", level: "K3", text: "Use equivalence partitioning to derive test cases" },
        { code: "FL-4.2.2", level: "K3", text: "Use boundary value analysis to derive test cases" },
        { code: "FL-4.2.3", level: "K3", text: "Use decision table testing to derive test cases" },
        { code: "FL-4.2.4", level: "K3", text: "Use state transition testing to derive test cases" },
        { code: "FL-4.3.1", level: "K2", text: "Explain statement testing" },
        { code: "FL-4.3.2", level: "K2", text: "Explain branch testing" },
        { code: "FL-4.3.3", level: "K2", text: "Explain the value of white-box testing" },
        { code: "FL-4.4.1", level: "K2", text: "Explain error guessing" },
        { code: "FL-4.4.2", level: "K2", text: "Explain exploratory testing" },
        { code: "FL-4.4.3", level: "K2", text: "Explain checklist-based testing" },
        { code: "FL-4.5.1", level: "K2", text: "Explain how to write user stories in collaboration" },
        { code: "FL-4.5.2", level: "K2", text: "Classify the different options for writing acceptance criteria" },
        { code: "FL-4.5.3", level: "K3", text: "Use ATDD to derive test cases" }
      ]
    },
    {
      id: 5,
      title: "Managing the Test Activities",
      duration: "335 minutes",
      examQuestions: 9,
      color: "#d97706",
      sections: [
        {
          id: "5.1",
          title: "Test Planning",
          content: `TEST PLAN content (IEEE 829 inspired):
• Scope and objectives of testing
• Test approach and strategy
• Resources (people, tools, environments)
• Schedule and milestones
• Entry and exit criteria
• Risks and mitigations
• Communication plan

Entry Criteria (Definition of Ready — BEFORE testing starts):
• Test environment is set up and available
• Test data is prepared
• Test items meet quality threshold
• Required tools and access available

Exit Criteria (Definition of Done — WHEN to STOP testing):
• Coverage targets achieved (code, requirements)
• Estimated defect density reached
• All planned tests executed
• Agreed number of unresolved defects ≤ threshold
• Deadlines reached (time-based exit)

Test Estimation Techniques:
1. RATIO-BASED: Test effort = k × development effort (e.g., 1:1 ratio)
2. EXTRAPOLATION: Use early iteration data to predict remaining effort
3. WIDEBAND DELPHI: Expert consensus — each expert estimates independently, discuss, re-estimate
4. THREE-POINT ESTIMATION: E = (O + 4M + P) / 6
   O = optimistic, M = most likely, P = pessimistic
5. PLANNING POKER: Agile — relative story points via cards, consensus

Test Case Prioritization:
• Risk-based: highest risk first (most important)
• Coverage-based: tests covering most new code first
• Requirements-based: high-priority requirements first
• Dependency-based: prerequisites before dependent tests

Test Pyramid (Agile):
• Bottom: Component/Unit tests — most tests, fast, cheap, isolated
• Middle: Integration tests — fewer, medium speed
• Top: E2E/UI/System tests — fewest, slow, expensive
Implication: Automate bottom heavily; use top for critical paths only

Testing Quadrants (Agile, Brian Marick):
• Q1 (Tech-facing, Team support): Unit tests, component tests → AUTOMATE
• Q2 (Business-facing, Team support): Functional tests, prototypes, simulations → AUTOMATE + MANUAL
• Q3 (Business-facing, Product critique): Exploratory, usability, UAT → MANUAL
• Q4 (Tech-facing, Product critique): Performance, security, load, stress → TOOLS`,
          keyTerms: ["test plan", "entry criteria", "exit criteria", "test approach", "test pyramid", "testing quadrants", "risk-based testing"]
        },
        {
          id: "5.2",
          title: "Risk Management",
          content: `RISK LEVEL = Likelihood × Impact (Probability × Severity)

Risk Types:
• PROJECT RISKS: Threaten the test project schedule/budget/quality of process
  Examples: key tester leaving, unrealistic deadlines, late delivery from dev, vendor issues
• PRODUCT RISKS: Threaten software quality (things that could go wrong in the product)
  Examples: complex calculations wrong, security vulnerabilities, poor performance, wrong business logic

Product Risk Analysis Process:
1. IDENTIFICATION: Brainstorm what could go wrong (stakeholders, past defects, domain knowledge)
2. ASSESSMENT: Estimate likelihood × impact for each risk
3. RISK MITIGATION: Actions to reduce risk
   - Testing more (focus testing effort on high-risk areas)
   - Risk transfer (insurance, outsourcing)
   - Risk acceptance (document and accept)
   - Contingency plan (plan B)
4. MONITORING: Track risk status throughout project

Risk-Based Testing:
• High risk items get: more test coverage, earlier testing, more experienced testers
• Low risk items get: less testing
• Risk level determines test depth and priority`,
          keyTerms: ["risk", "product risk", "project risk", "risk analysis", "risk assessment", "risk mitigation", "risk-based testing", "risk level", "risk identification", "risk monitoring", "risk control"]
        },
        {
          id: "5.3",
          title: "Test Monitoring, Test Control and Test Completion",
          content: `TEST MONITORING metrics:
• % of test cases planned/designed/executed
• % tests passed/failed/blocked
• Defects found/closed/outstanding
• Defect density (defects per feature/size)
• Test coverage achieved (requirements, code)
• Estimated vs actual effort

Test Progress Reports (DURING testing):
• Audience: test manager, project manager, stakeholders
• Content: test progress, issues, risks, plan vs. actual, next steps

Test Completion Reports (AT END of testing):
• Audience: project sponsors, client, senior management
• Content: summary of testing, defects found/fixed, coverage achieved, lessons learned, recommendations

Communicating Test Status:
• Dashboards and burndown charts for Agile
• Defect trend charts (open vs. closed over time)
• Risk heat maps
• Test execution progress charts`,
          keyTerms: ["test monitoring", "test control", "test completion report", "test progress report", "defect management"]
        },
        {
          id: "5.4",
          title: "Configuration Management",
          content: `Configuration Management (CM) supports testing by:
• Version control of all test artifacts (test plans, cases, scripts, data)
• Identifying and tracking versions of test items being tested
• Ensuring testers work with correct versions
• Supporting reproducibility (reproduce issues with same config)
• Enabling traceability between test artifacts and software versions
• Maintaining integrity of test environment configurations

Without CM: Tests run against wrong build; defects cannot be reproduced; audit fails`,
          keyTerms: ["configuration management"]
        },
        {
          id: "5.5",
          title: "Defect Management",
          content: `Defect Report (Bug Report) mandatory fields:
• Unique identifier (ID)
• Title / summary (short description)
• Date found and reporter's name
• Test object and version (what was being tested)
• Test environment (OS, browser, device, build)
• Test case / procedure reference
• Steps to reproduce (numbered, precise)
• Expected result
• Actual result (what happened)
• Severity (impact on system: critical/major/minor/trivial)
• Priority (urgency to fix: high/medium/low)
• Status (new/open/fixed/closed/rejected/deferred)
• References (requirements, screenshots, logs)

Defect Life Cycle:
New → Assigned → Open → Fixed → Retest → Closed/Reopened

Severity vs. Priority:
• SEVERITY: Technical impact on system (set by tester/QA)
• PRIORITY: Business urgency to fix (set by product owner/manager)
• High severity + low priority: System crash in rarely-used feature
• Low severity + high priority: Typo in company logo on homepage`,
          keyTerms: ["defect report", "defect management", "severity", "priority"]
        }
      ],
      learningObjectives: [
        { code: "FL-5.1.1", level: "K2", text: "Exemplify the purpose and content of a test plan" },
        { code: "FL-5.1.2", level: "K1", text: "Recognize how a tester adds value to iteration and release planning" },
        { code: "FL-5.1.3", level: "K2", text: "Compare and contrast entry criteria and exit criteria" },
        { code: "FL-5.1.4", level: "K3", text: "Use estimation techniques to calculate the required test effort" },
        { code: "FL-5.1.5", level: "K3", text: "Apply test case prioritization" },
        { code: "FL-5.1.6", level: "K1", text: "Recall the concepts of the test pyramid" },
        { code: "FL-5.1.7", level: "K2", text: "Summarize the testing quadrants and their relationships with test levels/types" },
        { code: "FL-5.2.1", level: "K1", text: "Identify risk level by using risk likelihood and risk impact" },
        { code: "FL-5.2.2", level: "K2", text: "Distinguish between project risks and product risks" },
        { code: "FL-5.2.3", level: "K2", text: "Explain how product risk analysis may influence thoroughness/scope of testing" },
        { code: "FL-5.2.4", level: "K2", text: "Explain what measures can be taken in response to analyzed product risks" },
        { code: "FL-5.3.1", level: "K1", text: "Recall metrics used for testing" },
        { code: "FL-5.3.2", level: "K2", text: "Summarize the purposes, content, and audiences for test reports" },
        { code: "FL-5.3.3", level: "K2", text: "Exemplify how to communicate the status of testing" },
        { code: "FL-5.4.1", level: "K2", text: "Summarize how configuration management supports testing" },
        { code: "FL-5.5.1", level: "K3", text: "Prepare a defect report" }
      ]
    },
    {
      id: 6,
      title: "Test Tools",
      duration: "20 minutes",
      examQuestions: 2,
      color: "#7c3aed",
      sections: [
        {
          id: "6.1",
          title: "Tool Support for Testing",
          content: `Categories of test tools:
• TEST MANAGEMENT tools: Jira, TestRail, Zephyr — manage test plans, cases, execution, defects
• REQUIREMENTS MANAGEMENT tools: track requirements; link to tests
• STATIC ANALYSIS tools: linters, SonarQube — analyze code without running it
• TEST DESIGN tools: mind map tools, model-based testing tools
• TEST DATA tools: generate/prepare/manage test data
• TEST EXECUTION tools: Selenium, Cypress, JUnit, TestNG — automate test execution
• COVERAGE tools: JaCoCo — measure code coverage during test execution
• NON-FUNCTIONAL tools: JMeter (performance), OWASP ZAP (security), BrowserStack (compatibility)
• DevOps/CI tools: Jenkins, GitLab CI — integrate testing in pipeline
• COLLABORATION tools: Confluence, Slack — team communication and documentation`,
          keyTerms: ["test automation", "test tools"]
        },
        {
          id: "6.2",
          title: "Benefits and Risks of Test Automation",
          content: `BENEFITS of Test Automation:
• Saves time: eliminates repetitive manual execution
• Reduces human error: consistent execution every time
• More objective assessment: coverage metrics are calculated precisely
• Faster feedback: CI pipeline runs tests on every commit
• Enables regression testing: run large suites quickly
• Frees testers for more complex/creative testing
• Test 24/7 without human presence

RISKS of Test Automation:
• High initial investment: tool selection, setup, scripting time
• Training cost: team needs to learn automation tools/frameworks
• Maintenance burden: scripts break when UI/API changes (brittle tests)
• Over-reliance: automation misses what requires human judgment (UX, visual)
• Unrealistic expectations: automation won't find all defects
• Vendor lock-in: tied to specific tool ecosystem
• False confidence: passing automated tests ≠ no defects`,
          keyTerms: ["test automation"]
        }
      ],
      learningObjectives: [
        { code: "FL-6.1.1", level: "K2", text: "Explain how different types of test tools support testing" },
        { code: "FL-6.2.1", level: "K1", text: "Recall the benefits and risks of test automation" }
      ]
    }
  ]
};

const QUESTIONS = [
  // ===== CHAPTER 1: FUNDAMENTALS OF TESTING =====
  {
    id: 1,
    chapter: 1,
    section: "1.1",
    lo: "FL-1.1.1",
    level: "K1",
    source: "Official Sample Exam A",
    question: "Which of the following statements describes a valid test objective?",
    options: [
      "To prove that there are no unfixed defects in the system under test",
      "To prove that there will be no failures after the system is implemented into production",
      "To reduce the risk level of the test object and to build confidence in its quality level",
      "To verify that there are no untested combinations of inputs"
    ],
    answer: 2,
    explanation: "A valid test objective is to reduce risk and build confidence in quality. Options A and B are impossible — testing cannot prove absence of all defects or guarantee zero failures. Option D violates Principle 2 (exhaustive testing is impossible)."
  },
  {
    id: 2,
    chapter: 1,
    section: "1.1",
    lo: "FL-1.1.2",
    level: "K2",
    source: "Practice",
    question: "A tester runs a test, finds a failure, and logs a defect. A developer then locates the code defect, corrects it, and runs unit tests to verify. Which activities describe testing and which describe debugging?",
    options: [
      "Running the test and logging the defect is testing; locating and correcting the defect is debugging",
      "All activities described are part of testing",
      "Locating and correcting the defect is testing; running the test is debugging",
      "All activities described are part of debugging"
    ],
    answer: 0,
    explanation: "Testing includes running tests and identifying failures/logging defects. Debugging includes finding the root cause of the defect, fixing it, and verifying the fix. They are distinct activities — testers test, developers debug."
  },
  {
    id: 3,
    chapter: 1,
    section: "1.2",
    lo: "FL-1.2.1",
    level: "K2",
    source: "Official Sample Exam A",
    question: "Which shows an example of test activities that contribute to success?",
    options: [
      "Having testers involved during various SDLC activities will help detect defects in work products",
      "Testers try not to disturb developers while they are coding to allow them to be more productive",
      "Testers collaborating with end users help improve defect reports during integration and system testing",
      "Certified testers will design much better test cases than non-certified testers"
    ],
    answer: 0,
    explanation: "Testers involved throughout the SDLC can find defects in all work products (not just code) — including requirements, designs, and test plans — leading to success. The other options contain incorrect assumptions."
  },
  {
    id: 4,
    chapter: 1,
    section: "1.2",
    lo: "FL-1.2.3",
    level: "K2",
    source: "Practice",
    question: "A developer misunderstands a requirement and writes code that calculates tax incorrectly. During system testing, the test team finds that the tax amount shown is wrong. Which correctly maps the ISTQB terms to this scenario?",
    options: [
      "Error = wrong calculation; Defect = misunderstood requirement; Failure = wrong tax shown",
      "Error = misunderstood requirement; Defect = incorrect code; Failure = wrong tax shown",
      "Error = wrong tax shown; Defect = incorrect code; Failure = misunderstood requirement",
      "Error = incorrect code; Defect = wrong tax shown; Failure = misunderstood requirement"
    ],
    answer: 1,
    explanation: "Error = human mistake (developer misunderstanding the requirement). Defect = flaw introduced in the code (incorrect tax calculation logic). Failure = observable wrong behavior (wrong tax amount displayed during testing)."
  },
  {
    id: 5,
    chapter: 1,
    section: "1.3",
    lo: "FL-1.3.1",
    level: "K2",
    source: "Official Sample Exam A",
    question: "You notice that unchanged regression tests for the same feature for several iterations have found no new defects. Your manager is happy about this, but you are not. Which testing principle best explains your skepticism?",
    options: [
      "Tests wear out",
      "Absence-of-errors fallacy",
      "Defects cluster together",
      "Exhaustive testing is impossible"
    ],
    answer: 0,
    explanation: "Tests wear out (Pesticide Paradox — Principle 5): if the same tests are run repeatedly without change, they stop finding new defects. The solution is to regularly review and update tests, and add new tests for uncovered areas."
  },
  {
    id: 6,
    chapter: 1,
    section: "1.3",
    lo: "FL-1.3.1",
    level: "K2",
    source: "Practice",
    question: "An e-commerce application has been fully tested. All 500 test cases passed. The test manager says 'The system has no defects.' Which testing principle does this statement violate?",
    options: [
      "Exhaustive testing is impossible",
      "Early testing saves time and money",
      "Testing shows presence of defects, not their absence",
      "Defects cluster together"
    ],
    answer: 2,
    explanation: "Principle 1: Testing can show that defects ARE present, but cannot prove there are NO defects. Even if all test cases pass, there may still be undetected defects. The statement 'no defects' is a violation of this principle."
  },
  {
    id: 7,
    chapter: 1,
    section: "1.4",
    lo: "FL-1.4.1",
    level: "K2",
    source: "Official Sample Exam A",
    question: "In a mobile food ordering application, the team is implementing payment functionality. Which of the following activities is part of test analysis?",
    options: [
      "Estimating that integration testing will take 8 person-days of effort",
      "Deciding to test if it is possible to properly share payment between many users",
      "Using boundary value analysis to derive test data for the minimum allowed payment amount",
      "Analyzing a discrepancy between actual and expected result and reporting a defect"
    ],
    answer: 1,
    explanation: "Test analysis = defining WHAT to test (test conditions). Deciding to test payment sharing is identifying a test condition. Option A = test planning; Option C = test design; Option D = test execution."
  },
  {
    id: 8,
    chapter: 1,
    section: "1.4",
    lo: "FL-1.4.5",
    level: "K2",
    source: "Official Sample Exam A",
    question: "Which TWO of the following tasks belong MAINLY to a testing role? (Select 2)",
    options: [
      "Configure test environments",
      "Maintain the product backlog",
      "Design solutions to new requirements",
      "Create the test plan",
      "Report on achieved coverage"
    ],
    answer: [0, 4],
    multiAnswer: true,
    explanation: "Testers configure test environments (A) and report on achieved coverage (E). Option B = product owner/manager; Option C = developers/architects; Option D = test manager (not a tester role)."
  },
  {
    id: 9,
    chapter: 1,
    section: "1.5",
    lo: "FL-1.5.1",
    level: "K2",
    source: "Official Sample Exam A",
    question: "Which of the following skills are MOST important for a tester? (i) Domain knowledge, (ii) Creating a product vision, (iii) Being a good team player, (iv) Planning and organizing work for the whole team, (v) Critical thinking",
    options: [
      "ii and iv are important; i, iii, v are not",
      "i, iii, and v are important; ii and iv are not",
      "i, ii, and v are important; iii and iv are not",
      "iii and iv are important; i, ii, and v are not"
    ],
    answer: 1,
    explanation: "Domain knowledge (i), being a good team player (iii), and critical thinking (v) are core tester skills. Creating a product vision (ii) is a product owner/manager skill. Planning and organizing for the whole team (iv) is a management skill."
  },
  {
    id: 10,
    chapter: 1,
    section: "1.5",
    lo: "FL-1.5.2",
    level: "K1",
    source: "Official Sample Exam A",
    question: "How is the whole team approach reflected between testers and business representatives?",
    options: [
      "Business representatives decide on test automation approaches for the project",
      "Testers help business representatives define the overall test strategy",
      "Business representatives are not part of the whole team approach",
      "Testers help business representatives to create suitable acceptance tests"
    ],
    answer: 3,
    explanation: "In the whole team approach, testers collaborate with business representatives to create acceptance tests — ensuring tests reflect actual business needs and acceptance criteria."
  },

  // ===== CHAPTER 2: TESTING THROUGHOUT SDLC =====
  {
    id: 11,
    chapter: 2,
    section: "2.1",
    lo: "FL-2.1.2",
    level: "K1",
    source: "Official Sample Exam A",
    question: "In which SDLC models does the rule 'for every development activity there is a corresponding test activity' hold true?",
    options: [
      "Only in sequential development models (e.g., Waterfall)",
      "Only in iterative development models (e.g., Scrum)",
      "Only in iterative and incremental development models",
      "In sequential, iterative, and incremental development models"
    ],
    answer: 3,
    explanation: "This is a good testing practice that applies to ALL SDLC models — sequential (Waterfall), iterative (Scrum), and incremental. Every development activity should have corresponding testing regardless of the model used."
  },
  {
    id: 12,
    chapter: 2,
    section: "2.1",
    lo: "FL-2.1.3",
    level: "K1",
    source: "Official Sample Exam A",
    question: "Which of the following BEST describes ATDD (Acceptance Test-Driven Development)?",
    options: [
      "In ATDD, acceptance criteria are typically created in a given/when/then format",
      "In ATDD, test cases are mainly created at component testing level and are code-oriented",
      "In ATDD, tests are created based on acceptance criteria to drive the development of the system",
      "In ATDD, tests are based on desired behavior of the software, making it easier for team members to understand"
    ],
    answer: 2,
    explanation: "ATDD: acceptance tests written BEFORE development, based on acceptance criteria, to drive development. Option A describes the BDD format (Given/When/Then). Option B describes TDD. Option D describes BDD."
  },
  {
    id: 13,
    chapter: 2,
    section: "2.1",
    lo: "FL-2.1.5",
    level: "K2",
    source: "Official Sample Exam A",
    question: "Which of the following is NOT an example of the shift-left approach?",
    options: [
      "Reviewing user requirements before they have been formally accepted",
      "Writing a component test before the code for that component is written",
      "Executing performance tests for a component during the component testing phase",
      "Writing a test script before setting up the configuration management process"
    ],
    answer: 3,
    explanation: "Shift-left means testing earlier. Option D is incorrect because test scripts should be managed UNDER configuration management — creating them before CM is set up is not a good practice, not a shift-left example."
  },
  {
    id: 14,
    chapter: 2,
    section: "2.1",
    lo: "FL-2.1.6",
    level: "K2",
    source: "Official Sample Exam A",
    question: "Which argument would you use to convince your manager to introduce retrospectives at the end of each release cycle?",
    options: [
      "Retrospectives are very popular and your clients would appreciate implementing them",
      "They will save money because the end users of the product do not provide immediate feedback",
      "Process weaknesses identified in a retrospective can serve as a to-do list for continuous process improvement",
      "Retrospectives embrace values such as courage and respect for team members"
    ],
    answer: 2,
    explanation: "Retrospectives identify process weaknesses and improvements for the next iteration — this is their primary value for continuous improvement. The other options are either incorrect or not the primary business justification."
  },
  {
    id: 15,
    chapter: 2,
    section: "2.2",
    lo: "FL-2.2.2",
    level: "K2",
    source: "Practice",
    question: "Which of the following is an example of NON-FUNCTIONAL testing?",
    options: [
      "Testing that a user can successfully log in with valid credentials",
      "Testing that the system processes 1000 concurrent users without performance degradation",
      "Testing that a payment is rejected when invalid card details are entered",
      "Testing that admin users can add new products to the catalog"
    ],
    answer: 1,
    explanation: "Non-functional testing tests HOW WELL the system works — performance, load, security, usability. Testing 1000 concurrent users is a performance/load test. The others test WHAT the system does (functional testing)."
  },
  {
    id: 16,
    chapter: 2,
    section: "2.2",
    lo: "FL-2.2.3",
    level: "K2",
    source: "Practice",
    question: "After a developer fixes a defect in the login module, the tester re-runs the specific test that originally found the defect to verify the fix. The tester also re-runs all other test cases for the entire application to check no new defects were introduced. Which terms correctly describe these activities?",
    options: [
      "Both activities are regression testing",
      "Re-running the specific login test is regression testing; re-running all others is confirmation testing",
      "Re-running the specific login test is confirmation testing; re-running all others is regression testing",
      "Both activities are confirmation testing"
    ],
    answer: 2,
    explanation: "CONFIRMATION testing = re-testing the specific defect that was fixed, to confirm the fix worked. REGRESSION testing = re-testing unchanged areas to ensure the fix didn't introduce new defects elsewhere."
  },
  {
    id: 17,
    chapter: 2,
    section: "2.3",
    lo: "FL-2.3.1",
    level: "K2",
    source: "Practice",
    question: "A legacy banking application is being migrated from an on-premise server to a cloud platform. No new features are added. Which type of testing is MOST relevant?",
    options: [
      "Acceptance testing",
      "Maintenance testing",
      "Exploratory testing",
      "Component testing"
    ],
    answer: 1,
    explanation: "Maintenance testing covers testing after changes — including MIGRATION to a new platform. Migration is a key trigger for maintenance testing. The scope includes verifying existing functionality still works in the new environment."
  },

  // ===== CHAPTER 3: STATIC TESTING =====
  {
    id: 18,
    chapter: 3,
    section: "3.1",
    lo: "FL-3.1.2",
    level: "K2",
    source: "Official Sample Exam A",
    question: "Which of the following is NOT a benefit of static testing?",
    options: [
      "Having less expensive defect management due to the ease of detecting defects later in the SDLC",
      "Fixing defects found during static testing is generally much less expensive than fixing defects found during dynamic testing",
      "Finding coding defects that might not have been found during dynamic testing",
      "Detecting gaps and inconsistencies in requirements"
    ],
    answer: 0,
    explanation: "Static testing finds defects EARLIER (not later) in the SDLC, making them cheaper to fix. Option A incorrectly states 'detecting defects LATER in the SDLC' — that is the opposite of what static testing does."
  },
  {
    id: 19,
    chapter: 3,
    section: "3.2",
    lo: "FL-3.2.1",
    level: "K1",
    source: "Official Sample Exam A",
    question: "Which of the following is a benefit of early and frequent stakeholder feedback?",
    options: [
      "It improves the test process for future projects by making testing more efficient",
      "It forces customers to prioritize their requirements based on agreed project risks",
      "It is the only valid way to measure the quality of incremental changes",
      "It helps avoid requirements misunderstandings before costly development begins"
    ],
    answer: 3,
    explanation: "Early and frequent feedback from stakeholders helps avoid misunderstandings about requirements before development has started — preventing expensive rework. The other options are either incorrect or not the primary benefit."
  },
  {
    id: 20,
    chapter: 3,
    section: "3.2",
    lo: "FL-3.2.4",
    level: "K2",
    source: "Official Sample Exam A",
    question: "A review is being conducted with the following characteristics: a scribe is present, the main purpose is to evaluate product quality, the meeting is led by the AUTHOR of the document, individual preparation by reviewers is required, and a review report is produced. Which review type is this MOST LIKELY?",
    options: [
      "Informal review",
      "Walkthrough",
      "Technical review",
      "Inspection"
    ],
    answer: 1,
    explanation: "WALKTHROUGH: Led by the AUTHOR (key differentiator), has a scribe, purpose includes evaluating quality, review report produced. INSPECTION is not author-led (moderator leads). TECHNICAL REVIEW is moderator-led. INFORMAL has no defined process."
  },
  {
    id: 21,
    chapter: 3,
    section: "3.2",
    lo: "FL-3.2.5",
    level: "K1",
    source: "Official Sample Exam A",
    question: "Which of the following is NOT a factor that contributes to successful reviews?",
    options: [
      "Participants should dedicate adequate time for the review",
      "Splitting large work products into small parts to make the review effort less intense",
      "Participants should avoid behaviors that indicate boredom or hostility",
      "Failures found should be acknowledged, appreciated, and handled objectively"
    ],
    answer: 3,
    explanation: "Reviews find DEFECTS (anomalies in work products), not 'failures'. Failures occur during dynamic testing when software runs. Using the wrong term (failures instead of defects) makes Option D incorrect in this context."
  },

  // ===== CHAPTER 4: TEST ANALYSIS AND DESIGN =====
  {
    id: 22,
    chapter: 4,
    section: "4.1",
    lo: "FL-4.1.1",
    level: "K2",
    source: "Official Sample Exam A",
    question: "Which of the following is a characteristic of experience-based test techniques?",
    options: [
      "Test cases are created based on detailed design information of the software",
      "Items tested within an interface code section are used to measure coverage",
      "The techniques heavily rely on the tester's knowledge of the software and the business domain",
      "Test cases are used to identify deviations from requirements specifications"
    ],
    answer: 2,
    explanation: "Experience-based techniques rely on the tester's knowledge, intuition, and past experience. Option A = white-box (design/code). Option B = white-box (code coverage). Option D = black-box (spec-based)."
  },
  {
    id: 23,
    chapter: 4,
    section: "4.2",
    lo: "FL-4.2.1",
    level: "K3",
    source: "Official Sample Exam A",
    question: "An apartment search form has two fields: Floor (3 options: ground/first/second+) and Garden type (3 options: no garden/small garden/large garden). Only ground floor apartments can have gardens. Built-in validation prevents invalid combinations from being entered. Applying EP to cover each floor type and each garden type, what is the MINIMUM number of test cases needed for 100% EP coverage?",
    options: [
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 1,
    explanation: "Partitions: Floor (3): Ground, First, Second+. Garden (3): No garden, Small garden, Large garden. Since invalid combinations (First+garden, Second+garden) cannot be entered, only valid combinations count. Minimum to cover all partitions: TC1=Ground+Small, TC2=Ground+Large, TC3=First+NoGarden, TC4=Second+NoGarden = 4 tests."
  },
  {
    id: 24,
    chapter: 4,
    section: "4.2",
    lo: "FL-4.2.1",
    level: "K3",
    source: "Practice - India Exam Style",
    question: "A field accepts age values. Valid ages for insurance are 18 to 60 (inclusive). Values outside this range should be rejected. Using Equivalence Partitioning, which of the following sets of test values gives 100% EP coverage?",
    options: [
      "17, 18, 60, 61",
      "10, 30, 65",
      "18, 60",
      "17, 40, 61"
    ],
    answer: 3,
    explanation: "EP creates 3 partitions: <18 (invalid), 18-60 (valid), >60 (invalid). 100% EP coverage needs 1 test per partition: one value <18 (e.g., 17), one value 18-60 (e.g., 40), one value >60 (e.g., 61). Option D covers all 3 partitions with minimum tests."
  },
  {
    id: 25,
    chapter: 4,
    section: "4.2",
    lo: "FL-4.2.2",
    level: "K3",
    source: "Official Sample Exam A",
    question: "A grade system has 6 grade bands: 0-50=Failed, 51-60=Fair, 61-70=Satisfactory, 71-80=Good, 81-90=Very Good, 91-100=Excellent. Test cases are: TC1=91, TC2=50, TC3=81, TC4=60, TC5=70, TC6=80. What is the 2-value BVA coverage achieved?",
    options: [
      "50%",
      "60%",
      "33.3%",
      "100%"
    ],
    answer: 0,
    explanation: "2-value BVA requires MIN and MAX of each partition. 6 partitions × 2 = 12 boundary values total. TC1=91(max), TC2=50(max of fail), TC3=81(min of very good), TC4=60(max of fair), TC5=70(max of satisfactory), TC6=80(max of good). That covers 6 of 12 boundary values = 50%."
  },
  {
    id: 26,
    chapter: 4,
    section: "4.2",
    lo: "FL-4.2.2",
    level: "K3",
    source: "Practice - India Exam Style",
    question: "A field accepts quantities from 1 to 100. Using 3-value BVA, which set of test values provides the MOST appropriate coverage?",
    options: [
      "0, 1, 100, 101",
      "1, 50, 100",
      "0, 1, 2, 99, 100, 101",
      "1, 100"
    ],
    answer: 2,
    explanation: "3-value BVA tests: MIN-1, MIN, MIN+1 (at lower boundary) and MAX-1, MAX, MAX+1 (at upper boundary). For range 1-100: 0, 1, 2 (lower boundary) and 99, 100, 101 (upper boundary) = 6 test values. This gives the most thorough BVA coverage."
  },
  {
    id: 27,
    chapter: 4,
    section: "4.2",
    lo: "FL-4.2.3",
    level: "K3",
    source: "Practice - India Exam Style",
    question: "A loan approval system has 2 conditions: Credit Score (Good/Poor) and Employment Status (Employed/Unemployed). Rules: If Good Credit AND Employed → Approve; If Good Credit AND Unemployed → Review; If Poor Credit AND Employed → Review; If Poor Credit AND Unemployed → Reject. How many rules are in the full decision table and how many test cases needed for 100% coverage?",
    options: [
      "2 rules, 2 test cases",
      "4 rules, 4 test cases",
      "8 rules, 8 test cases",
      "4 rules, 2 test cases"
    ],
    answer: 1,
    explanation: "With 2 binary conditions (Good/Poor, Employed/Unemployed), the full decision table has 2^2 = 4 rules. Each rule produces a different action (Approve, Review, Review, Reject). 100% decision table coverage requires 1 test per rule = 4 test cases."
  },
  {
    id: 28,
    chapter: 4,
    section: "4.3",
    lo: "FL-4.3.1",
    level: "K2",
    source: "Official Sample Exam A",
    question: "Your test suite has achieved 100% statement coverage. What is the CORRECT consequence of this?",
    options: [
      "Each instruction in the code that contains a defect has been executed at least once",
      "Any test suite with more test cases will also achieve 100% statement coverage",
      "Each path through the code has been executed at least once",
      "Every combination of input values has been tested at least once"
    ],
    answer: 0,
    explanation: "100% statement coverage means every executable statement was executed at least once. If a statement contains a defect, it was executed, giving the test a chance to reveal the defect. It does NOT cover all paths or all input combinations."
  },
  {
    id: 29,
    chapter: 4,
    section: "4.3",
    lo: "FL-4.3.3",
    level: "K2",
    source: "Official Sample Exam A",
    question: "Which of the following is NOT true for white-box testing?",
    options: [
      "During white-box testing the entire software implementation is considered",
      "White-box coverage metrics can help identify additional tests to increase coverage",
      "White-box test techniques can be used in static testing",
      "White-box testing can help identify gaps in requirements implementation"
    ],
    answer: 3,
    explanation: "White-box testing is based on internal code structure — it does NOT help identify gaps in requirements (that is a benefit of black-box testing based on specifications). White-box testing verifies the code, not the requirements completeness."
  },
  {
    id: 30,
    chapter: 4,
    section: "4.4",
    lo: "FL-4.4.1",
    level: "K2",
    source: "Official Sample Exam A",
    question: "Which of the following BEST describes error guessing?",
    options: [
      "Error guessing involves using your knowledge and experience of defects found in the past and typical errors made by developers",
      "Error guessing involves using your personal experience of development and the errors you made as a developer",
      "Error guessing requires you to imagine you are the user and guess errors the user could make when using the system",
      "Error guessing requires you to rapidly duplicate the development task to identify errors made by developers"
    ],
    answer: 0,
    explanation: "Error guessing uses a tester's knowledge of: past defects found, common developer mistakes, and domain expertise to predict where defects are likely. It's systematic use of knowledge, not random guessing."
  },
  {
    id: 31,
    chapter: 4,
    section: "4.4",
    lo: "FL-4.4.2",
    level: "K2",
    source: "Official Sample Exam A",
    question: "A project has delayed release, late test execution start, very detailed domain knowledge in the test team, requirements not fully documented, and management asking for quick results. Which test technique fits BEST?",
    options: [
      "Checklist-based testing",
      "Error guessing",
      "Exploratory testing",
      "Branch testing"
    ],
    answer: 2,
    explanation: "Exploratory testing is ideal when: requirements are incomplete/missing, time is limited, testers have deep domain knowledge. It combines simultaneous learning, test design, and execution — perfect for this scenario."
  },
  {
    id: 32,
    chapter: 4,
    section: "4.5",
    lo: "FL-4.5.2",
    level: "K2",
    source: "Official Sample Exam A",
    question: "Which of the following BEST describes how acceptance criteria can be documented for a user story?",
    options: [
      "Performing retrospectives to determine actual stakeholder needs for the current iteration",
      "Using the given/when/then format to describe an example test condition related to a user story",
      "Using verbal communication to reduce the risk of misunderstanding acceptance criteria",
      "Documenting risks related to a user story in a test plan"
    ],
    answer: 1,
    explanation: "Acceptance criteria can be documented using the Given/When/Then (BDD) format, which clearly describes test conditions related to user stories. This creates a shared understanding between business, developers, and testers."
  },
  {
    id: 33,
    chapter: 4,
    section: "4.5",
    lo: "FL-4.5.3",
    level: "K3",
    source: "Official Sample Exam A",
    question: "User story: 'As an Editor, I want to review content before it is published so that I can assure grammar is correct.' Acceptance criteria include: log in as Editor, view pages, edit content, add markup, save changes, reassign to content owner. Which is the BEST ATDD test case?",
    options: [
      "Test if the editor can save the document after deleting all the page content",
      "Test if the content owner can log in to the system and make updates",
      "Test if the editor can schedule the edited content for publication",
      "Test if the editor can reassign the content to another editor to make updates"
    ],
    answer: 0,
    explanation: "Option A directly tests an acceptance criterion (save changes). Option B tests the wrong role (content owner, not editor). Options C and D test behaviors NOT mentioned in the acceptance criteria — ATDD tests must be derived from acceptance criteria."
  },

  // ===== CHAPTER 5: MANAGING TEST ACTIVITIES =====
  {
    id: 34,
    chapter: 5,
    section: "5.1",
    lo: "FL-5.1.2",
    level: "K1",
    source: "Official Sample Exam A",
    question: "How do testers add value to iteration and release planning?",
    options: [
      "Testers determine the priority of the user stories to be developed in the next iteration",
      "Testers focus on ensuring only functional aspects of the system are considered during planning",
      "Testers participate in detailed risk identification and risk assessment of user stories",
      "Testers guarantee the release of high-quality software through early test design"
    ],
    answer: 2,
    explanation: "Testers add value to planning by participating in risk identification and assessment — helping the team understand what might go wrong and prioritize accordingly. Testers do NOT determine story priority (that's the product owner) or guarantee quality."
  },
  {
    id: 35,
    chapter: 5,
    section: "5.1",
    lo: "FL-5.1.3",
    level: "K2",
    source: "Official Sample Exam A",
    question: "Which TWO of the following are EXIT criteria for testing a system? (Select 2)",
    options: [
      "Test environment is set up and ready",
      "The ability to log in to the test object has been verified",
      "Estimated defect density has been reached",
      "Requirements are translated into given/when/then format",
      "Regression tests have been automated"
    ],
    answer: [2, 4],
    multiAnswer: true,
    explanation: "EXIT criteria are conditions that STOP testing. Option C (defect density reached) and E (regression tests automated) are exit conditions. Options A and B are ENTRY criteria (preconditions to START testing). Option D is a requirements activity."
  },
  {
    id: 36,
    chapter: 5,
    section: "5.1",
    lo: "FL-5.1.4",
    level: "K3",
    source: "Official Sample Exam A",
    question: "Using the three-point estimation technique, you estimated: optimistic = 2 person-hours, most likely = 11 person-hours, pessimistic = 14 person-hours. What is the final estimate?",
    options: [
      "9 person-hours",
      "14 person-hours",
      "11 person-hours",
      "10 person-hours"
    ],
    answer: 3,
    explanation: "Three-point formula: E = (O + 4M + P) / 6 = (2 + 4×11 + 14) / 6 = (2 + 44 + 14) / 6 = 60 / 6 = 10 person-hours."
  },
  {
    id: 37,
    chapter: 5,
    section: "5.1",
    lo: "FL-5.1.4",
    level: "K3",
    source: "Practice - India Exam Style",
    question: "A test manager uses three-point estimation for a feature: Optimistic = 5 days, Most Likely = 8 days, Pessimistic = 17 days. What is the estimated effort?",
    options: [
      "10 days",
      "8 days",
      "9 days",
      "11 days"
    ],
    answer: 2,
    explanation: "E = (O + 4M + P) / 6 = (5 + 4×8 + 17) / 6 = (5 + 32 + 17) / 6 = 54 / 6 = 9 days."
  },
  {
    id: 38,
    chapter: 5,
    section: "5.1",
    lo: "FL-5.1.7",
    level: "K2",
    source: "Official Sample Exam A",
    question: "Map test categories to the correct Agile Testing Quadrant: (1) Usability testing, (2) Component testing, (3) Functional testing, (4) Reliability testing → (A) Q1: Technology-facing, supports team, (B) Q2: Business-facing, supports team, (C) Q3: Business-facing, critiques product, (D) Q4: Technology-facing, critiques product",
    options: [
      "1C, 2A, 3B, 4D",
      "1D, 2A, 3C, 4B",
      "1C, 2B, 3D, 4A",
      "1D, 2B, 3C, 4A"
    ],
    answer: 0,
    explanation: "Q1 (tech, support): Component/unit tests → 2A. Q2 (business, support): Functional tests → 3B. Q3 (business, critique): Usability/UAT → 1C. Q4 (tech, critique): Performance/Reliability → 4D. Answer: 1C, 2A, 3B, 4D."
  },
  {
    id: 39,
    chapter: 5,
    section: "5.2",
    lo: "FL-5.2.2",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "Which of the following is a PRODUCT risk (not a project risk)?",
    options: [
      "Key developer leaving the project mid-sprint",
      "The payment calculation may produce incorrect results for large transactions",
      "Test environment not being available on time",
      "Vendor delivering a third-party component late"
    ],
    answer: 1,
    explanation: "PRODUCT risks threaten software quality — what could go wrong in the product (incorrect calculation). PROJECT risks threaten the test project's schedule/budget (key person leaving, environment unavailability, vendor delays)."
  },
  {
    id: 40,
    chapter: 5,
    section: "5.2",
    lo: "FL-5.2.4",
    level: "K2",
    source: "Official Sample Exam A",
    question: "Risk identified: Response time too long when generating reports. Likelihood: medium; Impact: high. Proposed response: hire an independent performance testing team and run alpha/beta testing before release. Which risk response is this?",
    options: [
      "Risk acceptance",
      "Contingency plan",
      "Risk mitigation",
      "Risk transfer"
    ],
    answer: 2,
    explanation: "Risk MITIGATION = taking actions to REDUCE the risk (testing more to reduce probability of failure going to production). Running performance tests and beta testing are actions that reduce the product risk. Risk transfer would involve insurance or outsourcing liability."
  },
  {
    id: 41,
    chapter: 5,
    section: "5.3",
    lo: "FL-5.3.3",
    level: "K2",
    source: "Official Sample Exam A",
    question: "Which tool shows the amount of work completed and the work remaining for the current iteration?",
    options: [
      "Acceptance criteria",
      "Defect report",
      "Test completion report",
      "Burndown chart"
    ],
    answer: 3,
    explanation: "A burndown chart visually shows work remaining vs. work completed over time in an Agile iteration/sprint. It is the standard tool for communicating iteration progress to stakeholders."
  },
  {
    id: 42,
    chapter: 5,
    section: "5.4",
    lo: "FL-5.4.1",
    level: "K2",
    source: "Official Sample Exam A",
    question: "After a new requirement is added, you update an automated test script to align with it and create a new version of the script in the test repository. Which process does this indicate?",
    options: [
      "Traceability management",
      "Maintenance testing",
      "Configuration management",
      "Requirements engineering"
    ],
    answer: 2,
    explanation: "Configuration Management (CM) involves version control of all test artifacts, including test scripts. Creating a new version in the repository is a CM activity that ensures proper version tracking and reproducibility."
  },
  {
    id: 43,
    chapter: 5,
    section: "5.5",
    lo: "FL-5.5.1",
    level: "K3",
    source: "Official Sample Exam A",
    question: "A defect report has: title 'Application hangs on report generation', date, status, description of issue, test case reference TC-1305, requirements reference REQ-0012, priority set to high. What CRITICAL information is MISSING from this defect report?",
    options: [
      "Expected result and actual result",
      "References and defect status",
      "Test environment and test item version",
      "Priority and severity"
    ],
    answer: 2,
    explanation: "A defect report must include the TEST ENVIRONMENT (OS, browser, version, device) and TEST ITEM (build/version of software under test) — without these, developers cannot reliably reproduce the defect. The report already has status, references, and priority."
  },

  // ===== CHAPTER 6: TEST TOOLS =====
  {
    id: 44,
    chapter: 6,
    section: "6.1",
    lo: "FL-6.1.1",
    level: "K2",
    source: "Official Sample Exam A",
    question: "Which test activity does a test data preparation tool PRIMARILY support?",
    options: [
      "Test monitoring and control",
      "Test analysis and design",
      "Test implementation and execution",
      "Test completion"
    ],
    answer: 2,
    explanation: "Test data preparation tools create, manage, and prepare test data needed for test execution. This supports the TEST IMPLEMENTATION and EXECUTION phase where data must be ready before tests can run."
  },
  {
    id: 45,
    chapter: 6,
    section: "6.2",
    lo: "FL-6.2.1",
    level: "K1",
    source: "Official Sample Exam A",
    question: "Which correctly identifies a potential RISK of performing test automation?",
    options: [
      "It may introduce unknown regressions in the production environment",
      "Sufficient effort to maintain testware may not be properly allocated",
      "Testing tools and associated testware may not be sufficiently relied upon",
      "It may reduce the time allocated for manual testing activities"
    ],
    answer: 1,
    explanation: "A key risk of test automation is the MAINTENANCE burden — automated scripts break when the application UI/API changes, and insufficient effort may be allocated to keep them updated. This is a well-known risk that can undermine automation ROI."
  },

  // ===== ADDITIONAL INDIA EXAM PRACTICE QUESTIONS =====
  {
    id: 46,
    chapter: 1,
    section: "1.3",
    lo: "FL-1.3.1",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "A company developed a banking application that passed all tests. However, customers cannot perform the core task they need — international transfers — because this feature was never included in the requirements. Which testing principle best applies?",
    options: [
      "Testing shows presence of defects, not their absence",
      "Defects cluster together",
      "Absence-of-errors fallacy",
      "Exhaustive testing is impossible"
    ],
    answer: 2,
    explanation: "Principle 7 — Absence-of-errors fallacy: Even if testing finds no defects and all tests pass, the software can still be unusable if it doesn't meet actual user needs. The system passed all tests but missed a key business requirement."
  },
  {
    id: 47,
    chapter: 2,
    section: "2.1",
    lo: "FL-2.1.4",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "Which of the following BEST describes the impact of DevOps on testing?",
    options: [
      "DevOps eliminates the need for dedicated testers in the team",
      "DevOps separates development and operations, with testing done only at the end",
      "DevOps enables automated testing in CI/CD pipelines providing fast feedback to developers",
      "DevOps means developers are solely responsible for all testing activities"
    ],
    answer: 2,
    explanation: "DevOps integrates development and operations, enabling automated testing in CI/CD pipelines. This provides fast feedback loops — developers know within minutes if their changes broke tests. It supports shift-left (earlier testing) and shift-right (monitoring in production)."
  },
  {
    id: 48,
    chapter: 3,
    section: "3.2",
    lo: "FL-3.2.3",
    level: "K1",
    source: "Practice - India Exam Style",
    question: "In a formal inspection, which role is responsible for running the review meeting and ensuring it stays on track?",
    options: [
      "Author",
      "Scribe",
      "Moderator/Facilitator",
      "Review Leader"
    ],
    answer: 2,
    explanation: "The MODERATOR/FACILITATOR runs the review meeting, keeps discussion on track, and ensures the review achieves its objectives. The AUTHOR created the work product. The SCRIBE records findings. The REVIEW LEADER organizes and plans the review."
  },
  {
    id: 49,
    chapter: 4,
    section: "4.2",
    lo: "FL-4.2.4",
    level: "K3",
    source: "Practice - India Exam Style",
    question: "An ATM has states: Idle, Card Inserted, PIN Entered, Transaction Processing, Dispense Cash. Valid transitions: Idle→Card Inserted (card insert), Card Inserted→PIN Entered (PIN entry), PIN Entered→Transaction Processing (select transaction), Transaction Processing→Dispense Cash (approved), Dispense Cash→Idle (cash taken), PIN Entered→Idle (cancel), Card Inserted→Idle (cancel). What is the MINIMUM number of test cases needed for all valid transitions coverage?",
    options: [
      "7",
      "5",
      "3",
      "2"
    ],
    answer: 2,
    explanation: "To cover all 7 valid transitions with minimum test cases: TC1: Idle→Card Inserted→PIN Entered→Transaction Processing→Dispense Cash→Idle (5 transitions). TC2: Card Inserted→Idle (1 transition via cancel). TC3: PIN Entered→Idle (1 transition via cancel). Total = 3 test cases covering all 7 transitions."
  },
  {
    id: 50,
    chapter: 5,
    section: "5.1",
    lo: "FL-5.1.6",
    level: "K1",
    source: "Practice - India Exam Style",
    question: "Which statement about the test pyramid is CORRECT?",
    options: [
      "The top of the pyramid (E2E/UI tests) should have the most tests as they cover the most functionality",
      "The bottom of the pyramid (unit/component tests) should have the most tests as they are fast, cheap, and isolated",
      "All levels of the test pyramid should have an equal number of tests for balanced coverage",
      "The middle layer (integration tests) is the most important and should have the most tests"
    ],
    answer: 1,
    explanation: "The test pyramid advocates for: MOST tests at the bottom (unit/component — fast, cheap, isolated), FEWER integration tests in the middle, and FEWEST E2E/UI tests at the top (slow, expensive, brittle). This gives fast feedback with efficient resource use."
  },

  // ===== MORE CHAPTER 1 QUESTIONS =====
  {
    id: 51,
    chapter: 1,
    section: "1.1",
    lo: "FL-1.1.1",
    level: "K1",
    source: "Practice - India Exam Style",
    question: "Which of the following is NOT a typical test objective?",
    options: [
      "Finding defects in the software under test",
      "Building confidence in the quality of the software",
      "Proving that all defects have been removed",
      "Providing information for stakeholder decision-making"
    ],
    answer: 2,
    explanation: "Proving that ALL defects are removed is impossible (Principle 1 — testing shows presence, not absence, of defects). All other options are valid test objectives according to the ISTQB CTFL v4.0 syllabus."
  },
  {
    id: 52,
    chapter: 1,
    section: "1.2",
    lo: "FL-1.2.2",
    level: "K1",
    source: "Practice",
    question: "Which statement BEST describes the relationship between testing and quality assurance (QA)?",
    options: [
      "Testing and QA are the same activity performed by different teams",
      "QA is part of testing; testing is a broader activity",
      "Testing is part of QA; QA is a broader activity",
      "Testing and QA are completely independent with no relationship"
    ],
    answer: 2,
    explanation: "Testing is a subset of QA. QA is a broader activity focused on improving the overall development process to prevent defects. Testing is product-oriented (finding defects in the product) and contributes to QA by providing feedback about product quality."
  },
  {
    id: 53,
    chapter: 1,
    section: "1.2",
    lo: "FL-1.2.3",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "A tester incorrectly copies a formula into a spreadsheet-based test tool. As a result, calculated expected values are wrong, and many defects are raised against a correctly-working system. What ISTQB term describes the tester's mistake?",
    options: [
      "Defect",
      "Failure",
      "Error",
      "Root cause"
    ],
    answer: 2,
    explanation: "An ERROR is a human action that produces an incorrect result. The tester made a mistake (incorrectly copying the formula) — that is an error. The incorrect expected values in the tool would be the defect caused by that error."
  },
  {
    id: 54,
    chapter: 1,
    section: "1.3",
    lo: "FL-1.3.1",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "A test manager notices that most defects found in the last three releases came from the same two modules out of fifteen. What testing principle supports focusing more testing effort on those two modules?",
    options: [
      "Early testing saves time and money",
      "Testing is context-dependent",
      "Defects cluster together",
      "Tests wear out"
    ],
    answer: 2,
    explanation: "Principle 4 — Defects cluster together (Pareto Principle): A small number of modules or components tend to contain the majority of defects. Historical defect data showing repeated issues in the same modules justifies focusing effort there."
  },
  {
    id: 55,
    chapter: 1,
    section: "1.4",
    lo: "FL-1.4.3",
    level: "K2",
    source: "Practice",
    question: "Which of the following is an example of testware produced during test DESIGN?",
    options: [
      "Test completion report",
      "Defect report",
      "Test cases and test data",
      "Test execution log"
    ],
    answer: 2,
    explanation: "Test DESIGN produces test cases, test procedures, and test data. Test completion reports = test completion phase. Defect reports = test execution phase. Test execution logs = test execution phase."
  },
  {
    id: 56,
    chapter: 1,
    section: "1.4",
    lo: "FL-1.4.4",
    level: "K2",
    source: "Practice",
    question: "Why is maintaining traceability between test cases and requirements important?",
    options: [
      "It allows testers to automatically generate test cases from requirements",
      "It enables impact analysis when requirements change and shows coverage",
      "It replaces the need for a test plan",
      "It ensures all test cases are automated"
    ],
    answer: 1,
    explanation: "Traceability links test cases to requirements so that: (1) when a requirement changes, you know which tests need updating (impact analysis), and (2) you can demonstrate test coverage — which requirements have been tested."
  },
  {
    id: 57,
    chapter: 1,
    section: "1.5",
    lo: "FL-1.5.3",
    level: "K2",
    source: "Practice",
    question: "Which of the following is a DRAWBACK of having testers who are highly independent from the development team?",
    options: [
      "Independent testers bring a different perspective and catch more defects",
      "Independent testers may have communication gaps and be isolated from the team",
      "Independent testers are less biased than developers testing their own code",
      "Independent testers can provide an objective assessment of product quality"
    ],
    answer: 1,
    explanation: "A key drawback of high independence is communication overhead and isolation — testers may not understand the system well, may be seen as a bottleneck, and feedback loops become slower. Benefits (A, C, D) are advantages, not drawbacks."
  },
  {
    id: 58,
    chapter: 1,
    section: "1.3",
    lo: "FL-1.3.1",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "A team is testing a safety-critical avionics system. They are applying very rigorous, formal testing with strict documentation, entry/exit criteria, and compliance checks. A colleague says: 'This level of testing is overkill for our new mobile gaming app.' Which testing principle does the colleague's reasoning reflect?",
    options: [
      "Defects cluster together",
      "Exhaustive testing is impossible",
      "Testing is context-dependent",
      "Early testing saves time and money"
    ],
    answer: 2,
    explanation: "Principle 6 — Testing is context-dependent: The appropriate testing approach depends on the context. An avionics system requires rigorous testing due to safety criticality. A mobile gaming app requires a different, typically lighter approach. The same level of formality is not appropriate in all contexts."
  },
  {
    id: 59,
    chapter: 1,
    section: "1.4",
    lo: "FL-1.4.1",
    level: "K2",
    source: "Practice",
    question: "During which test activity are test conditions identified from the test basis?",
    options: [
      "Test planning",
      "Test analysis",
      "Test design",
      "Test implementation"
    ],
    answer: 1,
    explanation: "TEST ANALYSIS = identifying WHAT to test. During this activity, the test basis (requirements, specs, designs) is analyzed to identify test conditions (what aspects of the system need to be tested). Test design then turns those conditions into actual test cases."
  },
  {
    id: 60,
    chapter: 1,
    section: "1.4",
    lo: "FL-1.4.2",
    level: "K2",
    source: "Practice",
    question: "Which of the following factors has SIGNIFICANT influence on the test process?",
    options: [
      "The color scheme of the test management tool",
      "The number of monitors on testers' desks",
      "Applicable standards and regulatory requirements",
      "The physical location of the development office"
    ],
    answer: 2,
    explanation: "Applicable standards and regulatory requirements significantly influence the test process — they determine what must be tested, how formally, what documentation is required, and what coverage must be achieved. Context factors include SDLC, product risk, domain regulations, team skills, and technology."
  },

  // ===== MORE CHAPTER 2 QUESTIONS =====
  {
    id: 61,
    chapter: 2,
    section: "2.1",
    lo: "FL-2.1.1",
    level: "K2",
    source: "Practice",
    question: "A team uses a sequential (Waterfall) SDLC. Requirements are complete before design begins; design is complete before coding begins. What is the MAIN implication for testing?",
    options: [
      "Testing only happens after all coding is complete",
      "Testing activities can be planned early but execution only happens late",
      "Testers are not needed until system testing begins",
      "Test automation is mandatory in a sequential SDLC"
    ],
    answer: 1,
    explanation: "In a sequential SDLC, test PLANNING and analysis can happen early (when requirements/designs exist), but test EXECUTION happens after development. This means testing is 'late' in the lifecycle — a key drawback vs. iterative/agile models."
  },
  {
    id: 62,
    chapter: 2,
    section: "2.2",
    lo: "FL-2.2.1",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "A tester is verifying that a newly built e-commerce checkout workflow works end-to-end from product selection through payment confirmation on the fully integrated system. Which test level is this MOST LIKELY?",
    options: [
      "Component testing",
      "Component integration testing",
      "System testing",
      "Acceptance testing"
    ],
    answer: 2,
    explanation: "System testing tests the COMPLETE, INTEGRATED system against system requirements. An end-to-end workflow on the fully integrated system is system testing. Acceptance testing would be done by the customer/user to verify business needs are met."
  },
  {
    id: 63,
    chapter: 2,
    section: "2.2",
    lo: "FL-2.2.1",
    level: "K2",
    source: "Practice",
    question: "A developer writes a test to verify that the `calculateTax()` function returns the correct value when called with valid inputs, testing the function in isolation using mock objects for dependencies. Which test level is this?",
    options: [
      "System testing",
      "Component testing",
      "Acceptance testing",
      "Component integration testing"
    ],
    answer: 1,
    explanation: "Component (unit) testing: tests individual components in isolation, using mocks/stubs for dependencies. The developer testing a single function (`calculateTax()`) in isolation is component testing."
  },
  {
    id: 64,
    chapter: 2,
    section: "2.2",
    lo: "FL-2.2.2",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "A banking application is tested to ensure it responds to 10,000 concurrent login requests within 2 seconds. What type of testing is this?",
    options: [
      "Functional testing",
      "Regression testing",
      "Non-functional testing",
      "White-box testing"
    ],
    answer: 2,
    explanation: "Non-functional testing tests HOW WELL the system performs — performance, load, scalability, security, usability. Testing response time under concurrent load is performance/load testing, which is a type of non-functional testing."
  },
  {
    id: 65,
    chapter: 2,
    section: "2.1",
    lo: "FL-2.1.3",
    level: "K1",
    source: "Practice",
    question: "In TDD (Test-Driven Development), what is the CORRECT order of activities?",
    options: [
      "Write code → Write test → Refactor",
      "Write test → Write code → Refactor",
      "Write test → Refactor → Write code",
      "Refactor → Write code → Write test"
    ],
    answer: 1,
    explanation: "TDD follows the Red-Green-Refactor cycle: (1) Write a FAILING test first (Red), (2) Write just enough CODE to make the test pass (Green), (3) REFACTOR the code while keeping tests green. The key principle: tests are written BEFORE the code."
  },
  {
    id: 66,
    chapter: 2,
    section: "2.3",
    lo: "FL-2.3.1",
    level: "K2",
    source: "Practice",
    question: "A financial application that has been running in production for 5 years is being retired. Data needs to be migrated to a new system. Which statement about testing in this context is CORRECT?",
    options: [
      "No testing is needed since the system is being retired",
      "Only the new system needs testing",
      "Maintenance testing should cover the data migration and validation",
      "Regression testing is the only type needed"
    ],
    answer: 2,
    explanation: "RETIREMENT is one of the triggers for maintenance testing. When a system is retired, data migration testing is critical — ensuring data is correctly transferred and validated in the new system. This is a key maintenance testing scenario."
  },
  {
    id: 67,
    chapter: 2,
    section: "2.2",
    lo: "FL-2.2.3",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "After fixing a bug in the password reset feature, the development team releases a new build. The test team re-runs the password reset test AND all other existing test cases. Why are the other test cases being re-run?",
    options: [
      "To perform confirmation testing on the password reset fix",
      "To perform regression testing to check that the fix has not introduced new defects",
      "To perform acceptance testing before release",
      "To perform exploratory testing on the new build"
    ],
    answer: 1,
    explanation: "Re-running tests on areas OUTSIDE the changed component is REGRESSION testing — verifying the fix did not inadvertently break something else. Re-running the specific password reset test is confirmation testing."
  },
  {
    id: 68,
    chapter: 2,
    section: "2.1",
    lo: "FL-2.1.4",
    level: "K2",
    source: "Practice",
    question: "Which of the following is an example of 'shift-right' testing in a DevOps context?",
    options: [
      "Writing unit tests before writing production code",
      "Reviewing requirements before design starts",
      "Monitoring application performance and errors in production using observability tools",
      "Running security scans in the CI pipeline before code is merged"
    ],
    answer: 2,
    explanation: "Shift-RIGHT = testing later in the lifecycle, including PRODUCTION. Monitoring application behavior in production (A/B testing, canary releases, observability, chaos engineering) is shift-right testing. Options A, B, C are shift-LEFT examples."
  },

  // ===== MORE CHAPTER 3 QUESTIONS =====
  {
    id: 69,
    chapter: 3,
    section: "3.1",
    lo: "FL-3.1.1",
    level: "K1",
    source: "Practice",
    question: "Which of the following work products CAN be examined using static testing?",
    options: [
      "Application log files generated during test execution",
      "System resource usage metrics collected at runtime",
      "User requirements specification document",
      "Screenshots captured during exploratory testing"
    ],
    answer: 2,
    explanation: "Static testing examines WORK PRODUCTS without executing the software. A requirements specification is a work product that can be reviewed statically. Log files, resource metrics, and screenshots are runtime artifacts from dynamic testing."
  },
  {
    id: 70,
    chapter: 3,
    section: "3.1",
    lo: "FL-3.1.3",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "Which of the following defects can ONLY be found by static testing, NOT by dynamic testing?",
    options: [
      "A login button that does not respond when clicked",
      "An incorrect tax calculation that produces wrong results",
      "Dead code that can never be reached during execution",
      "A database query that returns incorrect search results"
    ],
    answer: 2,
    explanation: "DEAD CODE (unreachable code) can only be detected by static analysis — because by definition it is never executed during dynamic testing. Dynamic testing can only find defects in code paths that actually get executed."
  },
  {
    id: 71,
    chapter: 3,
    section: "3.2",
    lo: "FL-3.2.2",
    level: "K2",
    source: "Practice",
    question: "In which review activity are the findings discussed, and the status of each anomaly is agreed upon by the review participants?",
    options: [
      "Planning",
      "Individual review",
      "Communication and analysis",
      "Fixing and reporting"
    ],
    answer: 2,
    explanation: "COMMUNICATION AND ANALYSIS (review meeting): Reviewers discuss findings, each anomaly is analyzed, ownership is assigned. Individual review = each reviewer works independently before the meeting. Fixing = after the meeting, the author fixes agreed issues."
  },
  {
    id: 72,
    chapter: 3,
    section: "3.2",
    lo: "FL-3.2.4",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "Which review type is the MOST formal and uses entry/exit criteria, checklists, and collects metrics on defects found?",
    options: [
      "Informal review",
      "Walkthrough",
      "Technical review",
      "Inspection"
    ],
    answer: 3,
    explanation: "INSPECTION is the most formal review type. Key characteristics: moderator is NOT the author, entry/exit criteria defined, reviewers use checklists, metrics are collected (defect density, etc.), formal defect logging, and process improvement is a goal."
  },
  {
    id: 73,
    chapter: 3,
    section: "3.2",
    lo: "FL-3.2.3",
    level: "K1",
    source: "Practice",
    question: "Who is responsible for creating and incorporating fixes in response to defects found during a review?",
    options: [
      "The moderator",
      "The scribe",
      "The author",
      "The review leader"
    ],
    answer: 2,
    explanation: "The AUTHOR (creator of the work product) is responsible for fixing defects found during a review. The moderator runs the meeting, the scribe records findings, and the review leader organizes the review — but fixing is the author's responsibility."
  },
  {
    id: 74,
    chapter: 3,
    section: "3.2",
    lo: "FL-3.2.4",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "A team holds a review meeting where the author presents their design document, explains each section, and other team members ask questions and note issues. There is no individual preparation before the meeting, and the meeting is focused on knowledge transfer. Which review type is this?",
    options: [
      "Inspection",
      "Technical review",
      "Walkthrough",
      "Informal review"
    ],
    answer: 2,
    explanation: "WALKTHROUGH: Author-led, purpose includes knowledge transfer and finding defects, no mandatory individual preparation, scribe records issues. This description matches a walkthrough — author presenting and explaining, others asking questions."
  },

  // ===== MORE CHAPTER 4 QUESTIONS =====
  {
    id: 75,
    chapter: 4,
    section: "4.2",
    lo: "FL-4.2.1",
    level: "K3",
    source: "Practice - India Exam Style",
    question: "A form field accepts a discount percentage from 0% to 50% (inclusive). Applying Equivalence Partitioning, which of the following test sets gives 100% EP coverage with the MINIMUM number of test cases?",
    options: [
      "0, 25, 50",
      "-1, 0, 50, 51",
      "-5, 30, 55",
      "0, 50"
    ],
    answer: 2,
    explanation: "EP creates 3 partitions: <0% (invalid), 0-50% (valid), >50% (invalid). 100% EP coverage needs 1 test per partition. Option C: -5 (invalid partition), 30 (valid partition), 55 (invalid partition) = 3 tests covering all 3 partitions with minimum tests."
  },
  {
    id: 76,
    chapter: 4,
    section: "4.2",
    lo: "FL-4.2.2",
    level: "K3",
    source: "Practice - India Exam Style",
    question: "A password field requires between 8 and 16 characters (inclusive). Using 2-value BVA, which set of test values is CORRECT?",
    options: [
      "7, 8, 16, 17",
      "8, 16",
      "7, 9, 15, 17",
      "1, 8, 16, 100"
    ],
    answer: 1,
    explanation: "2-value BVA tests the MIN and MAX of each partition. Valid partition: min=8, max=16 → test 8 and 16. Those are the 2 boundary values for the valid partition. The test values should be {8, 16}. Note: 3-value BVA would add 7, 9, 15, 17."
  },
  {
    id: 77,
    chapter: 4,
    section: "4.2",
    lo: "FL-4.2.2",
    level: "K3",
    source: "Practice - India Exam Style",
    question: "A field accepts order quantities from 1 to 999. Using 3-value BVA at the UPPER boundary only, which test values are correct?",
    options: [
      "998, 999, 1000",
      "999, 1000",
      "997, 999, 1001",
      "1, 999"
    ],
    answer: 0,
    explanation: "3-value BVA at the upper boundary of range 1-999: MAX-1 = 998, MAX = 999, MAX+1 = 1000. So test values at upper boundary are {998, 999, 1000}. This tests one below boundary, at boundary, and one above boundary."
  },
  {
    id: 78,
    chapter: 4,
    section: "4.2",
    lo: "FL-4.2.3",
    level: "K3",
    source: "Practice - India Exam Style",
    question: "An insurance premium calculator has 3 conditions: Age (Under 25 / 25 or over), Driving history (Clean / With incidents), Vehicle type (Standard / Sports). How many rules are in the full decision table?",
    options: [
      "6",
      "8",
      "3",
      "12"
    ],
    answer: 1,
    explanation: "Full decision table = 2^n rules where n = number of binary conditions. 3 binary conditions → 2^3 = 8 rules. Each rule represents one combination of condition values (e.g., Under25 + Clean + Standard = Rule 1, etc.)."
  },
  {
    id: 79,
    chapter: 4,
    section: "4.2",
    lo: "FL-4.2.3",
    level: "K3",
    source: "Practice",
    question: "In a decision table with 4 binary conditions, how many rules does the full decision table contain?",
    options: [
      "4",
      "8",
      "12",
      "16"
    ],
    answer: 3,
    explanation: "Full decision table rules = 2^n where n = number of binary (True/False) conditions. With 4 binary conditions: 2^4 = 16 rules. Each rule is a unique combination of all condition values."
  },
  {
    id: 80,
    chapter: 4,
    section: "4.2",
    lo: "FL-4.2.4",
    level: "K3",
    source: "Practice - India Exam Style",
    question: "What does 'all valid transitions coverage' mean in state transition testing?",
    options: [
      "Every STATE in the state machine has been visited at least once",
      "Every VALID TRANSITION (event-triggered state change) has been exercised at least once",
      "Every INVALID input in every state has been tested",
      "Every possible PATH through the state machine has been tested"
    ],
    answer: 1,
    explanation: "All valid transitions coverage = every valid transition (each valid event/trigger in each state) is exercised at least once. This is higher coverage than all-states (just visiting states) but less than all-paths coverage."
  },
  {
    id: 81,
    chapter: 4,
    section: "4.3",
    lo: "FL-4.3.2",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "A code module has an if-else statement. One test case executes the 'if' branch (true outcome). Which coverage criteria is NOT yet satisfied?",
    options: [
      "Statement coverage — not all statements are covered",
      "Branch coverage — the 'else' (false) branch has not been exercised",
      "Path coverage — not all paths have been tested",
      "Both B and C"
    ],
    answer: 3,
    explanation: "With only the 'if' branch executed: (1) BRANCH coverage is not met — the false/else branch was not exercised. (2) PATH coverage is not met — paths through the else branch exist and weren't tested. Both B and C are unsatisfied. Statement coverage may or may not be met depending on the else branch content."
  },
  {
    id: 82,
    chapter: 4,
    section: "4.3",
    lo: "FL-4.3.2",
    level: "K2",
    source: "Practice",
    question: "Which statement about the relationship between branch coverage and statement coverage is CORRECT?",
    options: [
      "100% statement coverage guarantees 100% branch coverage",
      "100% branch coverage guarantees 100% statement coverage",
      "Branch and statement coverage are completely independent",
      "They measure the same thing with different names"
    ],
    answer: 1,
    explanation: "Branch coverage SUBSUMES statement coverage: if you achieve 100% branch coverage, you automatically achieve 100% statement coverage (every statement must be reached). The reverse is NOT true — you can have 100% statement coverage without covering all branches."
  },
  {
    id: 83,
    chapter: 4,
    section: "4.4",
    lo: "FL-4.4.3",
    level: "K2",
    source: "Practice",
    question: "A team regularly tests compliance of their application against a defined set of accessibility requirements. They go through the same checklist for each release. Over time, the checklist rarely finds new defects. What should the team do?",
    options: [
      "Stop using the checklist as it is no longer effective",
      "Switch entirely to exploratory testing",
      "Review and update the checklist to add new checks based on recent accessibility standards",
      "Use the checklist less frequently to make it more effective"
    ],
    answer: 2,
    explanation: "When a checklist rarely finds new defects, it may be outdated (analogous to the pesticide paradox). The correct response is to REVIEW AND UPDATE the checklist — add new checks from recent standards, industry trends, and past defects — to keep it effective."
  },
  {
    id: 84,
    chapter: 4,
    section: "4.4",
    lo: "FL-4.4.2",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "Which of the following BEST describes a test charter in exploratory testing?",
    options: [
      "A formal test plan approved by the test manager",
      "A document specifying the mission, scope, and time-box for an exploratory testing session",
      "A template for writing formal test cases",
      "A list of defects found during a testing session"
    ],
    answer: 1,
    explanation: "A TEST CHARTER in exploratory testing defines: the scope/mission (what to explore), objectives, and time-box (how long). It gives the tester direction without scripting every step, enabling simultaneous learning, design, and execution within defined boundaries."
  },
  {
    id: 85,
    chapter: 4,
    section: "4.5",
    lo: "FL-4.5.1",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "Which of the following user stories satisfies the INVEST criteria?",
    options: [
      "As a user, I want the system to be fast so that I have a good experience",
      "As a registered customer, I want to reset my password via email so that I can regain access to my account when I forget it",
      "As a developer, I want a database that always works",
      "As a manager, I want all reports to be improved"
    ],
    answer: 1,
    explanation: "Option B satisfies INVEST: Independent (can be developed alone), Negotiable (method can be discussed), Valuable (clear benefit), Estimable (team can estimate it), Small (fits in a sprint), Testable (clear success criteria). Others are too vague (A, C, D), not user-focused, or not testable."
  },
  {
    id: 86,
    chapter: 4,
    section: "4.2",
    lo: "FL-4.2.1",
    level: "K3",
    source: "Practice - India Exam Style",
    question: "A salary input field for a payroll system accepts values between 10,000 and 200,000 (inclusive). What are the equivalence partitions?",
    options: [
      "One partition: 10,000 to 200,000",
      "Two partitions: less than 10,000 and greater than 200,000",
      "Three partitions: less than 10,000 (invalid), 10,000-200,000 (valid), greater than 200,000 (invalid)",
      "Four partitions: less than 0, 0-9999, 10000-200000, greater than 200000"
    ],
    answer: 2,
    explanation: "EP creates partitions where all values are treated the same way by the system. For range 10,000-200,000: Invalid partition 1 (<10,000), Valid partition (10,000-200,000), Invalid partition 2 (>200,000). This gives 3 partitions — the standard EP approach for a bounded range."
  },
  {
    id: 87,
    chapter: 4,
    section: "4.2",
    lo: "FL-4.2.2",
    level: "K3",
    source: "Practice - India Exam Style",
    question: "For the salary field accepting 10,000 to 200,000 (inclusive), using 2-value BVA across ALL partitions, how many test cases are needed?",
    options: [
      "2",
      "4",
      "6",
      "3"
    ],
    answer: 2,
    explanation: "2-value BVA: test MIN and MAX of EACH partition. 3 partitions → 2 values each = 6 total. Invalid partition 1: pick any value well below (e.g., -1) and 9,999 (max of that partition). Valid: 10,000 and 200,000. Invalid partition 2: 200,001 and any high value. = 6 test values total."
  },
  {
    id: 88,
    chapter: 4,
    section: "4.3",
    lo: "FL-4.3.1",
    level: "K2",
    source: "Practice",
    question: "A module has 10 executable statements. After running 3 test cases, 7 statements have been executed. What is the statement coverage achieved?",
    options: [
      "30%",
      "70%",
      "3%",
      "7%"
    ],
    answer: 1,
    explanation: "Statement coverage = (statements executed / total statements) × 100 = (7/10) × 100 = 70%. To achieve 100% statement coverage, all 10 statements must be executed at least once."
  },

  // ===== MORE CHAPTER 5 QUESTIONS =====
  {
    id: 89,
    chapter: 5,
    section: "5.1",
    lo: "FL-5.1.1",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "Which of the following is typically included in a test plan?",
    options: [
      "Detailed test scripts with step-by-step instructions",
      "The list of all defects found during testing",
      "The scope, objectives, approach, resources, and schedule for testing activities",
      "The source code of the system under test"
    ],
    answer: 2,
    explanation: "A test plan contains: scope of testing, test objectives, test approach/strategy, resources (people, tools, environments), schedule, entry/exit criteria, risks, and communication plans. Detailed test scripts are in test procedures; defects are in defect reports."
  },
  {
    id: 90,
    chapter: 5,
    section: "5.1",
    lo: "FL-5.1.4",
    level: "K3",
    source: "Practice - India Exam Style",
    question: "A test team estimates: Optimistic=4 days, Most Likely=7 days, Pessimistic=16 days. What is the three-point estimate?",
    options: [
      "9 days",
      "8 days",
      "7 days",
      "10 days"
    ],
    answer: 1,
    explanation: "E = (O + 4M + P) / 6 = (4 + 4×7 + 16) / 6 = (4 + 28 + 16) / 6 = 48 / 6 = 8 days."
  },
  {
    id: 91,
    chapter: 5,
    section: "5.1",
    lo: "FL-5.1.3",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "Which of the following is an ENTRY criterion for starting system testing?",
    options: [
      "All planned test cases have been executed",
      "The test environment is set up and the build under test has passed component integration testing",
      "Defect density has reached the agreed threshold",
      "All regression tests have been automated"
    ],
    answer: 1,
    explanation: "ENTRY CRITERIA are preconditions before testing CAN START. A ready environment and a build that passed earlier test levels are entry criteria for system testing. Options A, C, D are EXIT criteria (conditions that mean testing is done)."
  },
  {
    id: 92,
    chapter: 5,
    section: "5.2",
    lo: "FL-5.2.1",
    level: "K1",
    source: "Practice",
    question: "A product risk has been assessed as: Likelihood = High, Impact = High. What is the risk level?",
    options: [
      "Low",
      "Medium",
      "High",
      "Cannot be determined without more information"
    ],
    answer: 2,
    explanation: "Risk Level = Likelihood × Impact. High × High = High risk level. This means this area should receive the most testing attention, be tested earliest, and may need multiple testing techniques applied."
  },
  {
    id: 93,
    chapter: 5,
    section: "5.2",
    lo: "FL-5.2.2",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "Which TWO of the following are examples of PROJECT risks (not product risks)? (Select 2)",
    options: [
      "The payment module may have security vulnerabilities",
      "A key test architect may leave the project",
      "The third-party test environment may not be delivered on time",
      "The search algorithm may return incorrect results",
      "The system may crash under high load"
    ],
    answer: [1, 2],
    multiAnswer: true,
    explanation: "PROJECT risks threaten the test project itself (schedule, resources, budget): B (key person leaving) and C (environment delay) are project risks. Product risks (A, D, E) threaten the quality of the software product being built."
  },
  {
    id: 94,
    chapter: 5,
    section: "5.2",
    lo: "FL-5.2.3",
    level: "K2",
    source: "Practice",
    question: "A product risk analysis reveals that the 'data export' module has a HIGH risk level. How should this influence testing?",
    options: [
      "The data export module should receive less testing to save time for high-priority features",
      "The data export module should receive more thorough testing, be tested earlier, and by more experienced testers",
      "Risk analysis has no impact on how much testing individual modules receive",
      "The data export module should only be tested in the final testing phase"
    ],
    answer: 1,
    explanation: "Risk-based testing: HIGH risk areas get MORE testing (more test cases, more techniques applied), earlier testing (found sooner = cheaper to fix), and should be tested by more experienced testers. Risk level directly determines depth and priority of testing."
  },
  {
    id: 95,
    chapter: 5,
    section: "5.3",
    lo: "FL-5.3.1",
    level: "K1",
    source: "Practice - India Exam Style",
    question: "Which of the following is a commonly used TEST METRIC?",
    options: [
      "Number of lines of code written by developers",
      "Number of requirements approved by the product owner",
      "Percentage of test cases passed vs. failed",
      "Number of user stories in the product backlog"
    ],
    answer: 2,
    explanation: "Test metrics measure testing progress and quality. Common ones: % test cases executed/passed/failed, defect density, defect detection efficiency, test coverage achieved, number of defects found/closed. The others are development or project metrics, not test metrics."
  },
  {
    id: 96,
    chapter: 5,
    section: "5.3",
    lo: "FL-5.3.2",
    level: "K2",
    source: "Practice",
    question: "What is the MAIN difference between a test progress report and a test completion report?",
    options: [
      "Test progress reports are written by testers; test completion reports are written by managers",
      "Test progress reports are produced DURING testing for ongoing status; test completion reports summarize the ENTIRE test effort at the end",
      "Test completion reports contain more defect details than progress reports",
      "There is no difference — they are the same document with different names"
    ],
    answer: 1,
    explanation: "TEST PROGRESS REPORTS: produced regularly during testing (daily/weekly) to give ongoing status to test managers. TEST COMPLETION REPORTS: produced at the END of a test phase/project, summarizing all testing, coverage achieved, defects found, and lessons learned."
  },
  {
    id: 97,
    chapter: 5,
    section: "5.5",
    lo: "FL-5.5.1",
    level: "K3",
    source: "Practice - India Exam Style",
    question: "What is the difference between SEVERITY and PRIORITY in defect management?",
    options: [
      "Severity is set by the product owner; priority is set by the tester",
      "Severity describes technical impact on the system; priority describes urgency to fix it from a business perspective",
      "Severity and priority are the same concept with different names",
      "Severity is only used in formal inspections; priority is used in all review types"
    ],
    answer: 1,
    explanation: "SEVERITY = technical impact on the system (set by tester/QA) — Critical/Major/Minor/Trivial. PRIORITY = business urgency to fix (set by product owner/manager) — High/Medium/Low. A typo in the logo has LOW severity but HIGH priority (brand visibility). A crash in a rarely used feature has HIGH severity but LOW priority."
  },
  {
    id: 98,
    chapter: 5,
    section: "5.4",
    lo: "FL-5.4.1",
    level: "K2",
    source: "Practice",
    question: "A tester needs to reproduce a defect that was found last week. She needs to identify which version of the software was used, which version of the test data was used, and which version of the test script was run. Which process ensures this information is available?",
    options: [
      "Risk management",
      "Configuration management",
      "Defect management",
      "Test planning"
    ],
    answer: 1,
    explanation: "CONFIGURATION MANAGEMENT ensures that all test artifacts (software versions, test scripts, test data) are version-controlled and tracked. This makes it possible to reproduce any test scenario exactly as it was run, which is essential for defect reproduction and audit trails."
  },
  {
    id: 99,
    chapter: 5,
    section: "5.1",
    lo: "FL-5.1.5",
    level: "K3",
    source: "Practice - India Exam Style",
    question: "A test team has 5 test cases: TC1 (priority 1, no dependencies), TC2 (priority 3, depends on TC1), TC3 (priority 2, depends on TC1), TC4 (priority 1, depends on TC3), TC5 (priority 2, no dependencies). Applying risk-based prioritization with dependency constraints, what is the CORRECT execution order?",
    options: [
      "TC1, TC2, TC3, TC4, TC5",
      "TC1, TC3, TC4, TC5, TC2",
      "TC4, TC1, TC3, TC5, TC2",
      "TC1, TC4, TC3, TC2, TC5"
    ],
    answer: 1,
    explanation: "Rules: (1) Dependencies must come first. (2) Among eligible tests, highest priority (lowest number) runs first. TC1 first (no deps, priority 1). Then TC3 and TC5 eligible (TC1 done; TC5 no deps): TC3 priority 2 and TC5 priority 2 — TC5 has no dependencies on TC3 so both eligible; TC3 runs first as it unlocks TC4. Then TC4 (priority 1, deps met). Then TC5 (priority 2). Then TC2 (priority 3). → TC1, TC3, TC4, TC5, TC2."
  },
  {
    id: 100,
    chapter: 5,
    section: "5.1",
    lo: "FL-5.1.6",
    level: "K1",
    source: "Practice",
    question: "In the test pyramid, which type of test sits at the BOTTOM and should be MOST NUMEROUS?",
    options: [
      "End-to-end (E2E) / UI tests",
      "Integration tests",
      "Component / Unit tests",
      "Acceptance tests"
    ],
    answer: 2,
    explanation: "The TEST PYRAMID bottom layer = Component/Unit tests. They are: fast to execute, cheap to write and maintain, give rapid feedback, and test isolated units of logic. The pyramid recommends having the MOST of these. E2E/UI tests at the top should be fewest (slowest, most expensive, most brittle)."
  },

  // ===== MORE CHAPTER 6 QUESTIONS =====
  {
    id: 101,
    chapter: 6,
    section: "6.1",
    lo: "FL-6.1.1",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "Which type of tool is MOST appropriate for identifying security vulnerabilities such as SQL injection and cross-site scripting in source code without running the application?",
    options: [
      "Test execution tool (e.g., Selenium)",
      "Static analysis tool (e.g., SonarQube)",
      "Performance testing tool (e.g., JMeter)",
      "Test management tool (e.g., TestRail)"
    ],
    answer: 1,
    explanation: "STATIC ANALYSIS TOOLS analyze source code without executing it — they can detect security vulnerabilities, code quality issues, and coding standard violations. Dynamic tools like Selenium require the application to run. JMeter is for performance. TestRail is for test management."
  },
  {
    id: 102,
    chapter: 6,
    section: "6.2",
    lo: "FL-6.2.1",
    level: "K1",
    source: "Practice - India Exam Style",
    question: "Which of the following is a BENEFIT of test automation?",
    options: [
      "Automated tests always find more defects than manual testing",
      "Test automation eliminates the need for manual testing entirely",
      "Automated regression tests can be run quickly and repeatedly after each code change",
      "Automated tests require no maintenance once created"
    ],
    answer: 2,
    explanation: "A key BENEFIT of automation: Automated regression tests run quickly and repeatedly — especially in CI/CD pipelines — giving fast feedback after each code change. Options A and B are myths. Option D is a risk of automation (high maintenance burden), not a benefit."
  },
  {
    id: 103,
    chapter: 6,
    section: "6.1",
    lo: "FL-6.1.1",
    level: "K2",
    source: "Practice",
    question: "A team uses a tool that allows them to create, organize, and track test cases, test executions, and test results, and link them to requirements. Which category of test tool is this?",
    options: [
      "Test execution tool",
      "Static analysis tool",
      "Test management tool",
      "Performance testing tool"
    ],
    answer: 2,
    explanation: "TEST MANAGEMENT TOOLS (e.g., TestRail, Jira with Zephyr, Azure Test Plans) support managing test cases, tracking execution results, reporting on coverage, and linking tests to requirements. Examples: TestRail, HP ALM, Jira+Zephyr."
  },
  {
    id: 104,
    chapter: 6,
    section: "6.2",
    lo: "FL-6.2.1",
    level: "K1",
    source: "Practice",
    question: "A company decides to automate all their test cases. Six months later, they find that 40% of automated tests are broken due to frequent UI changes. Which risk of test automation does this illustrate?",
    options: [
      "Test automation provides faster feedback than manual testing",
      "Automated tests require significant maintenance effort when the application changes",
      "Test automation cannot test non-functional requirements",
      "Automated tests are more expensive to run than manual tests"
    ],
    answer: 1,
    explanation: "This illustrates the MAINTENANCE BURDEN risk of test automation. When the application (especially the UI) changes frequently, automated tests break and require significant effort to update. This is one of the most common challenges in test automation adoption."
  },

  // ===== MIXED EXAM-STYLE QUESTIONS =====
  {
    id: 105,
    chapter: 4,
    section: "4.2",
    lo: "FL-4.2.2",
    level: "K3",
    source: "Practice - India Exam Style",
    question: "A hotel booking system allows guests to book 1 to 30 nights (inclusive). A tester applies 2-value BVA. Which test values should be used?",
    options: [
      "0, 1, 30, 31",
      "1, 30",
      "0, 15, 31",
      "1, 15, 30"
    ],
    answer: 1,
    explanation: "2-value BVA: test the MIN and MAX of each partition. Valid partition (1-30): min=1, max=30. So 2-value BVA for the valid partition gives test values {1, 30}. (3-value BVA would also add 0 and 31 for the partition boundaries.)"
  },
  {
    id: 106,
    chapter: 1,
    section: "1.3",
    lo: "FL-1.3.1",
    level: "K2",
    source: "Official Sample Exam B Style",
    question: "Which testing principle states that early testing activities should be focused on preventing defects from being introduced into later phases?",
    options: [
      "Defects cluster together",
      "Early testing saves time and money",
      "Tests wear out",
      "Testing is context-dependent"
    ],
    answer: 1,
    explanation: "Principle 3 — Early testing saves time and money: Testing should start as early as possible in the SDLC. Finding defects in requirements/design costs far less than finding them in system testing or production. This is the basis of shift-left testing."
  },
  {
    id: 107,
    chapter: 3,
    section: "3.2",
    lo: "FL-3.2.5",
    level: "K1",
    source: "Practice - India Exam Style",
    question: "Which of the following contributes to a SUCCESSFUL review?",
    options: [
      "Combining the author and moderator roles in one person to save time",
      "Rushing through the review to meet project deadlines",
      "Management support for the review culture and valuing quality",
      "Reviewing as many pages as possible in each session regardless of complexity"
    ],
    answer: 2,
    explanation: "Key success factors for reviews include MANAGEMENT SUPPORT — when management values quality and allocates time for reviews, they are more effective. Combining author/moderator (A) reduces objectivity; rushing (B) reduces effectiveness; reviewing too much (D) leads to review fatigue and missed defects."
  },
  {
    id: 108,
    chapter: 5,
    section: "5.2",
    lo: "FL-5.2.4",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "A risk assessment identifies that a new payment gateway integration has a HIGH likelihood of failure and HIGH business impact. The team decides to accept this risk and proceed without additional testing because the deadline is tomorrow. What type of risk response is this?",
    options: [
      "Risk mitigation",
      "Risk transfer",
      "Risk acceptance",
      "Contingency planning"
    ],
    answer: 2,
    explanation: "RISK ACCEPTANCE: The team acknowledges the risk exists but decides to proceed without taking action to reduce it. This is sometimes done due to time/cost constraints. It should be documented and approved by stakeholders. Other responses: mitigation (test more), transfer (insurance/outsourcing), contingency (plan B if risk occurs)."
  },
  {
    id: 109,
    chapter: 4,
    section: "4.1",
    lo: "FL-4.1.1",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "A tester is designing test cases by analyzing the requirements specification and user stories, with no access to the source code. Which category of test technique is being used?",
    options: [
      "White-box testing technique",
      "Experience-based testing technique",
      "Black-box testing technique",
      "Structural testing technique"
    ],
    answer: 2,
    explanation: "BLACK-BOX testing techniques are based on the external behavior of the system — using requirements, specifications, and user stories as the test basis, with NO knowledge of internal code structure. White-box uses code structure; experience-based uses tester knowledge."
  },
  {
    id: 110,
    chapter: 2,
    section: "2.1",
    lo: "FL-2.1.5",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "Which of the following is a DIRECT benefit of applying the shift-left approach?",
    options: [
      "Testers gain more independence from developers",
      "Defects are found earlier when they are less expensive to fix",
      "All tests can be automated",
      "The need for system testing is eliminated"
    ],
    answer: 1,
    explanation: "The primary benefit of shift-left is finding defects EARLIER in the lifecycle when they are much cheaper and faster to fix. A defect in requirements costs orders of magnitude less to fix than the same defect found in production. Shift-left does NOT eliminate system testing or guarantee automation."
  }
];

const EXAM_INFO = {
  totalQuestions: 40,
  passingScore: 26,
  passingPercent: 65,
  duration: 60,
  durationNonNative: 75,
  syllabusVersion: "4.0",
  lastUpdated: "May 2024",
  questionDistribution: [
    { chapter: 1, title: "Fundamentals of Testing", questions: 8 },
    { chapter: 2, title: "Testing Throughout the SDLC", questions: 6 },
    { chapter: 3, title: "Static Testing", questions: 4 },
    { chapter: 4, title: "Test Analysis and Design", questions: 11 },
    { chapter: 5, title: "Managing the Test Activities", questions: 9 },
    { chapter: 6, title: "Test Tools", questions: 2 }
  ]
};
