import PersonalProfile from './sessions/personal-profile/personal-profile.component';
import TechnicalSkills from './sessions/technical-skills/technical-skills.component';
import WorkingExperience from './sessions/working-experience/working-experience.component';
import Education from './sessions/education/education.component';
import LanguageSkills from './sessions/language-skills/language-skills.component';
import AvailabilityAndSalary from './sessions/availability-and-salary/availability-and-salary.component';

import './App.css';

function App() {
  return (
    <div>
      <PersonalProfile />
      <TechnicalSkills />
      <WorkingExperience />
      <Education />
      <LanguageSkills />
      <AvailabilityAndSalary />
    </div>
  );
}

export default App;
