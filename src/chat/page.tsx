import DropdownSelector from '@/components/DropdownSelector/DropdownSelector';
import { languages, nativeLanguages, scenarios } from '@/libs/collections';
import { useState } from 'react';
import { Button } from '@chakra-ui/react';

function Chat() {
  const [language, setLanguage] = useState('');
  const [nativeLanguage, setNativeLanguage] = useState('');
  const [scenario, setScenario] = useState('');

  const isButtonDisabled = !language || !nativeLanguage || !scenario;

  return (
    <div className="grid gap-6 justify-items-center">
      <div>
        <DropdownSelector
          placeholder="Wähle deine Muttersprache"
          label="Muttersprache"
          items={nativeLanguages}
          onChange={setNativeLanguage}
        />
      </div>
      <div>
        <DropdownSelector
          placeholder="Wähle deine Zielsprache"
          label="Zielsprache"
          items={languages}
          onChange={setLanguage}
        />
      </div>
      <div>
        <DropdownSelector
          placeholder="Wähle ein Szenario"
          label="Szenario"
          items={scenarios}
          onChange={setScenario}
        />
      </div>
      <div>
        <Button disabled={isButtonDisabled}>Szenario starten</Button>
      </div>
    </div>
  );
}

export default Chat;
