export interface ServiceInput {
  name: string;
  icon?: string;
}

export interface ServiceModel {
  domain: string;
  task: string;
  model: string;
  link: string;
  note?: string;
}

export interface ServiceSection {
  id: string;
  title: string;
  content: string | string[];
  type?: 'text' | 'list' | 'table';
}

export interface Service {
  id: string;
  code: string;
  title: string;
  summary: string;
  inputs: ServiceInput[];
  primaryMode: 'RULE-OUT' | 'MINIMAL PANEL' | 'ESCALATION' | 'HYBRID';
  statusLabel: 'ACTIVE' | 'PILOT' | 'GATED';
  sections: ServiceSection[];
  modelLinks: ServiceModel[];
  images: {
    hero: string;
    diagram: string;
  };
  deployment: {
    cpu: boolean;
    gpu: boolean | 'optional';
    edge: boolean;
    offline: boolean;
    notes: string;
  };
  limitations: string[];
  exampleOutputs: string[];
}

export const services: Service[] = [
  {
    id: 'cardiac-pre-screening',
    code: 'SVC-01',
    title: 'Cardiac Pre-Screening Wing',
    summary: 'Low-cost cardiac pre-screening to defer low-yield ECG repetition and route high-risk symptoms faster.',
    inputs: [
      { name: 'Wearable ECG' },
      { name: 'Digital Stethoscope' },
      { name: 'Vitals' },
      { name: 'Symptoms' },
    ],
    primaryMode: 'HYBRID',
    statusLabel: 'ACTIVE',
    images: {
      hero: '/services/svc01-hero.svg',
      diagram: '/services/svc01-diagram.svg',
    },
    sections: [
      {
        id: 'problem',
        title: 'Problem',
        content: 'Low-risk cardiac presentations frequently trigger broad testing and referrals. This increases cost and congestion without improving outcomes for low-risk cases.',
      },
      {
        id: 'reduces',
        title: 'What it reduces / defers',
        content: [
          'Routine or repeated ECG in low-risk scenarios',
          'Low-yield echocardiography referrals for benign presentations',
          'Premature cardiology referrals driven by uncertainty',
        ],
        type: 'list',
      },
      {
        id: 'inputs',
        title: 'Inputs',
        content: [
          'Wearable / portable ECG (single-lead or multi-lead when available)',
          'Digital stethoscope audio (optional)',
          'Vitals (HR, BP, SpO₂)',
          'Structured symptom descriptors',
        ],
        type: 'list',
      },
      {
        id: 'engine',
        title: 'Engine mapping',
        content: [
          'Rule-Out: low-risk signals + stable vitals + no red flags → defer immediate testing',
          'Minimal Panel: recommend minimum next step (single ECG vs observation vs clinic review)',
          'Escalation: red flags → urgent evaluation',
        ],
        type: 'list',
      },
      {
        id: 'outputs',
        title: 'Outputs (non-diagnostic)',
        content: [
          'Risk band: Low / Moderate / High',
          'Confidence score',
          'Next step: Defer / Obtain ECG / Urgent evaluation',
          'Safety notes: "If symptoms worsen, seek care."',
        ],
        type: 'list',
      },
      {
        id: 'abstain',
        title: 'Abstain conditions',
        content: [
          'Low signal quality ECG',
          'Conflicting signals (e.g., abnormal vitals + low-confidence ECG)',
          'Missing critical symptoms data',
        ],
        type: 'list',
      },
      {
        id: 'safety',
        title: 'Safety gates (always escalate)',
        content: [
          'Syncope',
          'Severe chest pain',
          'Persistent dyspnea',
          'Unstable vitals',
        ],
        type: 'list',
      },
    ],
    modelLinks: [
      {
        domain: 'Cardiac',
        task: 'ECG arrhythmia',
        model: 'PTB-XL ECG benchmarking models',
        link: 'https://github.com/helme/ecg_ptbxl_benchmarking',
      },
      {
        domain: 'Cardiac',
        task: 'Arrhythmia classification',
        model: 'MIT-BIH arrhythmia classification baseline',
        link: 'https://github.com/antonior92/ecg-arrhythmia-classification',
      },
      {
        domain: 'Cardiac',
        task: 'Heart sound analysis',
        model: 'PhysioNet 2022 heart sound challenge baselines',
        link: 'https://github.com/physionetchallenges/2022-heart-sound',
      },
      {
        domain: 'Risk fusion',
        task: 'Tabular',
        model: 'XGBoost',
        link: 'https://github.com/dmlc/xgboost',
      },
      {
        domain: 'Risk fusion',
        task: 'Tabular alt',
        model: 'LightGBM',
        link: 'https://github.com/microsoft/LightGBM',
      },
    ],
    deployment: {
      cpu: true,
      gpu: false,
      edge: true,
      offline: true,
      notes: 'Model version pinning + audit logs per output',
    },
    limitations: [
      'Decision support only',
      'Does not diagnose or prescribe',
      'Requires local calibration and clinical validation',
    ],
    exampleOutputs: [
      '"Low risk. Stable vitals. Defer immediate ECG. Monitor and reassess if symptoms persist."',
      '"Uncertain signal quality. Abstain. Recommend clinical evaluation."',
    ],
  },
  {
    id: 'respiratory-triage',
    code: 'SVC-02',
    title: 'Respiratory Triage Wing',
    summary: 'Audio + vitals triage to reduce low-yield chest imaging and improve escalation safety.',
    inputs: [
      { name: 'Cough Audio' },
      { name: 'Breath Sounds' },
      { name: 'SpO₂' },
      { name: 'Symptoms' },
    ],
    primaryMode: 'HYBRID',
    statusLabel: 'ACTIVE',
    images: {
      hero: '/services/svc02-hero.svg',
      diagram: '/services/svc02-diagram.svg',
    },
    sections: [
      {
        id: 'problem',
        title: 'Problem',
        content: 'Mild respiratory symptoms often trigger chest X-rays and broad medication pathways without structured pre-screening.',
      },
      {
        id: 'reduces',
        title: 'What it reduces / defers',
        content: [
          'Low-yield chest X-ray for mild presentations',
          'Broad test panels ordered without risk stratification',
          'Unnecessary follow-ups driven by uncertainty',
        ],
        type: 'list',
      },
      {
        id: 'inputs',
        title: 'Inputs',
        content: [
          'Cough audio',
          'Breath sound audio (if captured)',
          'SpO₂, temperature, respiratory rate (if available)',
          'Structured symptoms',
        ],
        type: 'list',
      },
      {
        id: 'engine',
        title: 'Engine mapping',
        content: [
          'Rule-Out: stable SpO₂ + low-risk symptom profile + high-confidence audio → defer imaging',
          'Minimal Panel: recommend minimum test (SpO₂ recheck, clinic review, targeted test)',
          'Escalation: hypoxia / red flags → urgent evaluation',
        ],
        type: 'list',
      },
      {
        id: 'outputs',
        title: 'Outputs',
        content: [
          'Respiratory risk band',
          'Imaging suggested / not suggested',
          'Confidence',
          'Escalation triggers',
        ],
        type: 'list',
      },
      {
        id: 'abstain',
        title: 'Abstain conditions',
        content: [
          'Poor audio quality or short capture',
          'Missing SpO₂ when required by pathway',
          'Conflicting signals',
        ],
        type: 'list',
      },
      {
        id: 'safety',
        title: 'Safety gates (always escalate)',
        content: [
          'Hypoxia',
          'Hemoptysis',
          'Severe dyspnea',
          'Persistent high fever',
          'Unstable vitals',
        ],
        type: 'list',
      },
    ],
    modelLinks: [
      {
        domain: 'Respiratory',
        task: 'CXR triage (gateway only)',
        model: 'TorchXRayVision',
        link: 'https://github.com/mlmed/torchxrayvision',
      },
      {
        domain: 'Audio',
        task: 'Classification reference',
        model: 'PyTorch Audio classification tutorial',
        link: 'https://pytorch.org/audio/stable/tutorials/audio_classification_tutorial.html',
      },
      {
        domain: 'Audio',
        task: 'Embeddings (optional)',
        model: 'wav2vec2 base',
        link: 'https://huggingface.co/facebook/wav2vec2-base',
      },
      {
        domain: 'Risk fusion',
        task: 'Tabular',
        model: 'XGBoost',
        link: 'https://github.com/dmlc/xgboost',
      },
    ],
    deployment: {
      cpu: true,
      gpu: false,
      edge: false,
      offline: true,
      notes: 'Imaging gateway invoked only after engine flags',
    },
    limitations: [
      'Triage only; not diagnosis',
      'Imaging is not "replaced," it is gated',
    ],
    exampleOutputs: [
      '"Low risk. Stable oxygen. Defer chest imaging. Reassess if symptoms worsen."',
      '"High risk due to low SpO₂. Escalate to urgent evaluation."',
    ],
  },
  {
    id: 'hematology-blood-panel',
    code: 'SVC-03',
    title: 'Hematology & Blood Panel Minimization Wing',
    summary: 'Non-invasive risk screening to reduce routine CBC ordering in low-risk contexts.',
    inputs: [
      { name: 'Smartphone Camera' },
      { name: 'Demographics' },
      { name: 'Vitals' },
      { name: 'Symptoms' },
    ],
    primaryMode: 'MINIMAL PANEL',
    statusLabel: 'ACTIVE',
    images: {
      hero: '/services/svc03-hero.svg',
      diagram: '/services/svc03-diagram.svg',
    },
    sections: [
      {
        id: 'problem',
        title: 'Problem',
        content: 'Routine blood panels are frequently ordered without individualized risk profiling. Many return normal, creating cost without actionable change.',
      },
      {
        id: 'reduces',
        title: 'What it reduces / defers',
        content: [
          'Screening CBC in low-risk contexts',
          'Repeat panels without new clinical indication',
          'Over-broad blood panels when targeted testing suffices',
        ],
        type: 'list',
      },
      {
        id: 'inputs',
        title: 'Inputs',
        content: [
          'Smartphone camera guided capture (conjunctiva / nailbed)',
          'Demographics',
          'Vitals',
          'Symptoms',
        ],
        type: 'list',
      },
      {
        id: 'engine',
        title: 'Engine mapping',
        content: [
          'Rule-Out: low-risk profile → defer immediate CBC',
          'Minimal Panel: recommend CBC only when risk elevated',
          'Escalation: severe symptoms → urgent evaluation',
        ],
        type: 'list',
      },
      {
        id: 'outputs',
        title: 'Outputs',
        content: [
          'Anemia risk band (not Hb)',
          'Confidence',
          'Minimum next step: Defer / CBC / urgent evaluation',
          'Safety notes',
        ],
        type: 'list',
      },
      {
        id: 'abstain',
        title: 'Abstain conditions',
        content: [
          'Poor capture lighting / blur',
          'Missing key symptom data',
        ],
        type: 'list',
      },
    ],
    modelLinks: [
      {
        domain: 'Vision',
        task: 'Transfer learning',
        model: 'PyTorch Image Models',
        link: 'https://github.com/huggingface/pytorch-image-models',
        note: 'requires local validation and calibration',
      },
      {
        domain: 'Risk fusion',
        task: 'Tabular',
        model: 'LightGBM',
        link: 'https://github.com/microsoft/LightGBM',
      },
      {
        domain: 'Risk fusion',
        task: 'Tabular alt',
        model: 'XGBoost',
        link: 'https://github.com/dmlc/xgboost',
      },
    ],
    deployment: {
      cpu: true,
      gpu: false,
      edge: true,
      offline: false,
      notes: 'Guided capture and quality checks required',
    },
    limitations: [
      'Does not estimate lab values',
      'Requires local calibration and validation',
      'Not used for emergency bleeding situations',
    ],
    exampleOutputs: [
      '"Low anemia risk. Defer CBC unless symptoms persist."',
      '"Uncertain capture. Abstain. Recommend clinician evaluation."',
    ],
  },
  {
    id: 'urinalysis-infection',
    code: 'SVC-04',
    title: 'Urinalysis & Infection Wing',
    summary: 'Standardized dipstick interpretation to reduce unnecessary lab urinalysis and cultures in low-risk cases.',
    inputs: [
      { name: 'Dipstick Camera' },
      { name: 'Symptoms' },
    ],
    primaryMode: 'MINIMAL PANEL',
    statusLabel: 'ACTIVE',
    images: {
      hero: '/services/svc04-hero.svg',
      diagram: '/services/svc04-diagram.svg',
    },
    sections: [
      {
        id: 'problem',
        title: 'Problem',
        content: 'Lab urinalysis and cultures are often ordered when a structured low-cost dipstick pathway can resolve low-risk presentations.',
      },
      {
        id: 'reduces',
        title: 'What it reduces / defers',
        content: [
          'Lab urinalysis in low-risk cases',
          'Urine cultures without escalation criteria',
          'Repeat visits due to inconsistent dipstick interpretation',
        ],
        type: 'list',
      },
      {
        id: 'inputs',
        title: 'Inputs',
        content: [
          'Dipstick photo with calibration overlay',
          'Symptoms and basic history',
        ],
        type: 'list',
      },
      {
        id: 'engine',
        title: 'Engine mapping',
        content: [
          'Minimal Panel: dipstick interpretation → decide lab escalation only when indicated',
          'Escalation: systemic symptoms → urgent evaluation',
        ],
        type: 'list',
      },
      {
        id: 'outputs',
        title: 'Outputs',
        content: [
          'Dipstick readout (colorimetric)',
          'Infection likelihood band',
          'Next step: Treat / retest / lab confirm / urgent evaluation',
          'Safety notes',
        ],
        type: 'list',
      },
      {
        id: 'abstain',
        title: 'Abstain conditions',
        content: [
          'No calibration present',
          'Poor lighting / glare',
          'Unclear strip region detection',
        ],
        type: 'list',
      },
    ],
    modelLinks: [
      {
        domain: 'Vision',
        task: 'Backbones',
        model: 'PyTorch Image Models',
        link: 'https://github.com/huggingface/pytorch-image-models',
        note: 'requires local validation and calibration',
      },
      {
        domain: 'Color calibration',
        task: 'Classical CV',
        model: 'OpenCV',
        link: 'https://github.com/opencv/opencv',
      },
      {
        domain: 'Risk fusion',
        task: 'Tabular',
        model: 'XGBoost',
        link: 'https://github.com/dmlc/xgboost',
      },
    ],
    deployment: {
      cpu: true,
      gpu: false,
      edge: true,
      offline: true,
      notes: 'Works offline; sync later',
    },
    limitations: [
      'Not a replacement for clinician evaluation in systemic infection',
      'Culture gating must follow clinical escalation criteria',
    ],
    exampleOutputs: [
      '"Low risk. Dipstick negative. Defer lab urinalysis. Reassess if symptoms persist."',
      '"High risk due to systemic flags. Escalate to evaluation."',
    ],
  },
  {
    id: 'sleep-fatigue-screening',
    code: 'SVC-05',
    title: 'Sleep & Fatigue Screening Wing',
    summary: 'Risk stratification to reduce unnecessary sleep lab studies and accelerate high-risk cases.',
    inputs: [
      { name: 'Overnight Audio' },
      { name: 'Motion Proxies' },
      { name: 'Questionnaires' },
    ],
    primaryMode: 'RULE-OUT',
    statusLabel: 'ACTIVE',
    images: {
      hero: '/services/svc05-hero.svg',
      diagram: '/services/svc05-diagram.svg',
    },
    sections: [
      {
        id: 'problem',
        title: 'Problem',
        content: 'Sleep studies are expensive and often ordered without clear risk stratification. Many low-risk cases can be monitored or treated with simpler pathways first.',
      },
      {
        id: 'reduces',
        title: 'What it reduces / defers',
        content: [
          'Unnecessary polysomnography in low-risk snoring/fatigue',
          'Delayed referral for high-risk patients due to unclear pathways',
        ],
        type: 'list',
      },
      {
        id: 'inputs',
        title: 'Inputs',
        content: [
          'Overnight audio',
          'Motion proxies (phone or wearable)',
          'Structured questionnaires',
        ],
        type: 'list',
      },
      {
        id: 'engine',
        title: 'Engine mapping',
        content: [
          'Rule-Out: low risk → defer sleep study, monitor',
          'Minimal Panel: recommend home monitoring steps or targeted evaluation',
          'Escalation: high risk → sleep study referral',
        ],
        type: 'list',
      },
      {
        id: 'outputs',
        title: 'Outputs',
        content: [
          'Sleep apnea risk band',
          'Confidence',
          'Next step: monitor / clinic review / sleep study referral',
          'Safety notes',
        ],
        type: 'list',
      },
      {
        id: 'abstain',
        title: 'Abstain conditions',
        content: [
          'Insufficient audio duration',
          'Poor signal quality',
          'Missing questionnaire fields',
        ],
        type: 'list',
      },
    ],
    modelLinks: [
      {
        domain: 'Audio',
        task: 'Embeddings',
        model: 'wav2vec2 base',
        link: 'https://huggingface.co/facebook/wav2vec2-base',
      },
      {
        domain: 'Audio',
        task: 'Classification reference',
        model: 'PyTorch Audio classification tutorial',
        link: 'https://pytorch.org/audio/stable/tutorials/audio_classification_tutorial.html',
      },
      {
        domain: 'Risk fusion',
        task: 'Tabular',
        model: 'LightGBM',
        link: 'https://github.com/microsoft/LightGBM',
      },
    ],
    deployment: {
      cpu: true,
      gpu: false,
      edge: false,
      offline: false,
      notes: 'Privacy-forward: optional on-device feature extraction',
    },
    limitations: [
      'Not definitive diagnosis',
      'Requires clinical confirmation when high risk',
    ],
    exampleOutputs: [
      '"Low risk. Monitor. Sleep study not recommended at this stage."',
      '"High risk. Recommend sleep study referral."',
    ],
  },
  {
    id: 'imaging-gateway',
    code: 'SVC-06',
    title: 'Imaging Gateway Wing',
    summary: 'Imaging is not replaced; it is gated. Imaging is invoked only when the engine flags higher risk.',
    inputs: [
      { name: 'Engine Flags Only' },
    ],
    primaryMode: 'ESCALATION',
    statusLabel: 'GATED',
    images: {
      hero: '/services/svc06-hero.svg',
      diagram: '/services/svc06-diagram.svg',
    },
    sections: [
      {
        id: 'problem',
        title: 'Problem',
        content: 'Imaging is frequently ordered defensively. This overloads radiology and increases cost. Live Corp gates imaging so it occurs when risk justifies it.',
      },
      {
        id: 'optimizes',
        title: 'What it optimizes',
        content: [
          'Reduces low-yield imaging orders',
          'Improves routing to the appropriate imaging modality',
          'Standardizes escalation criteria',
        ],
        type: 'list',
      },
      {
        id: 'inputs',
        title: 'Inputs',
        content: [
          'Engine flags from other wings',
          'Structured symptoms and vitals',
        ],
        type: 'list',
      },
      {
        id: 'outputs',
        title: 'Outputs',
        content: [
          'Imaging necessity band',
          'Recommended modality class (general guidance only)',
          'Escalation triggers and safety notes',
        ],
        type: 'list',
      },
      {
        id: 'abstain',
        title: 'Abstain conditions',
        content: [
          'Conflicting upstream signals',
          'Incomplete red-flag assessment',
          'Unverifiable symptom profile',
        ],
        type: 'list',
      },
    ],
    modelLinks: [
      {
        domain: 'Imaging',
        task: 'CXR triage',
        model: 'TorchXRayVision',
        link: 'https://github.com/mlmed/torchxrayvision',
      },
      {
        domain: 'Imaging',
        task: 'Segmentation',
        model: 'nnU-Net',
        link: 'https://github.com/MIC-DKFZ/nnUNet',
      },
      {
        domain: 'Imaging',
        task: 'Pretrained segmentation',
        model: 'nnU-Net pretrained',
        link: 'https://github.com/MIC-DKFZ/nnUNet_pretrained',
      },
      {
        domain: 'Imaging',
        task: 'Multi-modal pipelines',
        model: 'MONAI Model Zoo',
        link: 'https://monai.io/model-zoo.html',
      },
    ],
    deployment: {
      cpu: false,
      gpu: 'optional',
      edge: false,
      offline: false,
      notes: 'Audit logs required for every imaging-gateway invocation',
    },
    limitations: [
      'Does not replace radiologists',
      'Never presented as autonomous diagnosis',
    ],
    exampleOutputs: [
      '"Moderate risk. Imaging may be warranted. Recommend clinician review and local protocol pathway."',
      '"Uncertain. Abstain. Recommend evaluation."',
    ],
  },
  {
    id: 'acute-deterioration-sepsis',
    code: 'SVC-07',
    title: 'Acute Deterioration & Sepsis Early Warning Wing',
    summary: 'Early warning risk scoring from vitals time-series to reduce indiscriminate panels while escalating true deterioration earlier.',
    inputs: [
      { name: 'Vitals Time-Series' },
      { name: 'Temperature' },
      { name: 'SpO₂' },
      { name: 'BP' },
      { name: 'HR' },
      { name: 'Symptoms' },
    ],
    primaryMode: 'ESCALATION',
    statusLabel: 'PILOT',
    images: {
      hero: '/services/svc07-hero.svg',
      diagram: '/services/svc07-diagram.svg',
    },
    sections: [
      {
        id: 'problem',
        title: 'Problem',
        content: 'In urgent care and OPD observation, clinicians either over-order broad labs "just in case" or under-recognize early deterioration. Both create harm: either unnecessary cost or dangerous delay.',
      },
      {
        id: 'reduces',
        title: 'What it reduces / improves',
        content: [
          'Reduces indiscriminate broad panels for low-risk observation cases',
          'Improves early escalation for true deterioration risk',
          'Standardizes observation protocols',
        ],
        type: 'list',
      },
      {
        id: 'inputs',
        title: 'Inputs',
        content: [
          'Vitals time-series (HR, BP, SpO₂, temp, RR if available)',
          'Symptom trajectory (worsening, persistent, new red flags)',
        ],
        type: 'list',
      },
      {
        id: 'engine',
        title: 'Engine mapping',
        content: [
          'Rule-Out: stable vitals trend + low risk profile → defer broad panels, continue monitoring',
          'Minimal Panel: recommend targeted tests instead of full panels',
          'Escalation: deteriorating trend → urgent evaluation',
        ],
        type: 'list',
      },
      {
        id: 'outputs',
        title: 'Outputs',
        content: [
          'Deterioration risk band',
          'Confidence',
          'Next step: continue monitoring / targeted test / urgent evaluation',
          '"Abstain" when data insufficient',
        ],
        type: 'list',
      },
      {
        id: 'abstain',
        title: 'Abstain conditions',
        content: [
          'Missing time-series window',
          'Unreliable measurements',
          'Conflicting or sparse signals',
        ],
        type: 'list',
      },
    ],
    modelLinks: [
      {
        domain: 'Time-series',
        task: 'Classical baseline',
        model: 'XGBoost',
        link: 'https://github.com/dmlc/xgboost',
      },
      {
        domain: 'Time-series',
        task: 'Deep learning (optional)',
        model: 'tsai',
        link: 'https://github.com/timeseriesAI/tsai',
      },
      {
        domain: 'Time-series',
        task: 'Probabilistic (optional)',
        model: 'PyMC',
        link: 'https://github.com/pymc-devs/pymc',
      },
      {
        domain: 'Data benchmarking',
        task: 'Dataset access',
        model: 'PhysioNet',
        link: 'https://physionet.org',
        note: 'use for validation and calibration; do not claim deployment performance without clinical validation',
      },
    ],
    deployment: {
      cpu: true,
      gpu: false,
      edge: false,
      offline: false,
      notes: 'Strict audit logs and alert rate controls',
    },
    limitations: [
      'Not a sepsis diagnosis',
      'Not a replacement for labs',
      'Designed to reduce waste while escalating risk earlier',
    ],
    exampleOutputs: [
      '"Stable trend. Defer broad panel. Continue monitoring with reassessment interval."',
      '"Rising risk trend. Escalate to urgent evaluation."',
    ],
  },
  {
    id: 'metabolic-chronic-risk',
    code: 'SVC-08',
    title: 'Metabolic & Chronic Risk Stratification Wing',
    summary: 'Risk framing for chronic pathways to reduce repeated routine panels in low-risk follow-ups and standardize targeted testing.',
    inputs: [
      { name: 'Vitals' },
      { name: 'Demographics' },
      { name: 'History' },
      { name: 'Symptoms' },
      { name: 'Prior Results (optional)' },
    ],
    primaryMode: 'MINIMAL PANEL',
    statusLabel: 'PILOT',
    images: {
      hero: '/services/svc08-hero.svg',
      diagram: '/services/svc08-diagram.svg',
    },
    sections: [
      {
        id: 'problem',
        title: 'Problem',
        content: 'Chronic care pathways often produce repeated routine labs and broad panels without individualized risk stratification, creating cost and fatigue for patients.',
      },
      {
        id: 'reduces',
        title: 'What it reduces / defers',
        content: [
          'Repeated broad metabolic panels without new indication',
          'Unfocused screening tests in low-risk follow-ups',
          'Redundant "check everything" ordering patterns',
        ],
        type: 'list',
      },
      {
        id: 'inputs',
        title: 'Inputs',
        content: [
          'Vitals',
          'Demographics',
          'Structured history and symptom changes',
          'Optional prior results if available',
        ],
        type: 'list',
      },
      {
        id: 'engine',
        title: 'Engine mapping',
        content: [
          'Rule-Out: stable course + low-risk changes → defer repeat broad panels',
          'Minimal Panel: recommend the smallest targeted next test based on risk and change',
          'Escalation: new red flags → evaluation',
        ],
        type: 'list',
      },
      {
        id: 'outputs',
        title: 'Outputs',
        content: [
          'Risk band',
          '"Minimal next test" recommendation category (targeted, not comprehensive)',
          'Confidence',
          'Safety notes',
        ],
        type: 'list',
      },
      {
        id: 'abstain',
        title: 'Abstain conditions',
        content: [
          'Missing history/context for risk framing',
          'Conflicting or incomplete prior results',
        ],
        type: 'list',
      },
    ],
    modelLinks: [
      {
        domain: 'Tabular risk',
        task: 'Risk fusion',
        model: 'LightGBM',
        link: 'https://github.com/microsoft/LightGBM',
      },
      {
        domain: 'Tabular risk',
        task: 'Risk fusion alt',
        model: 'XGBoost',
        link: 'https://github.com/dmlc/xgboost',
      },
      {
        domain: 'Calibration',
        task: 'Tools',
        model: 'scikit-learn',
        link: 'https://github.com/scikit-learn/scikit-learn',
      },
    ],
    deployment: {
      cpu: true,
      gpu: false,
      edge: false,
      offline: false,
      notes: 'Generates printable "minimal panel rationale" notes',
    },
    limitations: [
      'Not a diagnostic tool',
      'Does not output lab values',
      'Requires local clinical protocol mapping for "minimal panel categories"',
    ],
    exampleOutputs: [
      '"Low risk, stable course. Defer repeat broad panel; monitor symptoms and vitals."',
      '"Moderate risk change. Recommend targeted testing rather than full panel."',
    ],
  },
  {
    id: 'neurological-triage',
    code: 'SVC-09',
    title: 'Neurological Symptom Triage Wing',
    summary: 'Structured red-flag triage to reduce defensive neuro imaging while escalating true neurological emergencies.',
    inputs: [
      { name: 'Symptoms' },
      { name: 'Vitals' },
      { name: 'Simple Neuro Checks' },
      { name: 'Optional Audio/Video' },
    ],
    primaryMode: 'ESCALATION',
    statusLabel: 'PILOT',
    images: {
      hero: '/services/svc09-hero.svg',
      diagram: '/services/svc09-diagram.svg',
    },
    sections: [
      {
        id: 'problem',
        title: 'Problem',
        content: 'Neurological symptoms trigger defensive imaging, yet missing a true emergency is unacceptable. Live Corp focuses on structured triage, not diagnosis.',
      },
      {
        id: 'reduces',
        title: 'What it reduces / improves',
        content: [
          'Reduces low-yield defensive imaging in low-risk presentations',
          'Improves escalation safety for high-risk signs',
          'Standardizes documentation of red flags',
        ],
        type: 'list',
      },
      {
        id: 'inputs',
        title: 'Inputs',
        content: [
          'Structured symptom onset and pattern',
          'Vitals',
          'Simple guided checks (speech clarity prompts, coordination prompts)',
          'Optional short video/audio capture for signal quality only (not diagnosis claims)',
        ],
        type: 'list',
      },
      {
        id: 'engine',
        title: 'Engine mapping',
        content: [
          'Rule-Out: benign pattern + stable vitals + no red flags → defer immediate imaging',
          'Minimal Panel: recommend clinic evaluation or targeted pathway',
          'Escalation: acute focal deficits → urgent evaluation',
        ],
        type: 'list',
      },
      {
        id: 'outputs',
        title: 'Outputs',
        content: [
          'Neuro risk band',
          'Confidence',
          '"Urgent evaluation required / clinic review / monitor"',
          'Safety notes',
        ],
        type: 'list',
      },
      {
        id: 'abstain',
        title: 'Abstain conditions',
        content: [
          'Unclear timeline of onset',
          'Missing key red-flag data',
          'Poor capture quality',
        ],
        type: 'list',
      },
    ],
    modelLinks: [
      {
        domain: 'Triage logic',
        task: 'Risk fusion',
        model: 'scikit-learn',
        link: 'https://github.com/scikit-learn/scikit-learn',
      },
      {
        domain: 'Risk fusion',
        task: 'Alt',
        model: 'XGBoost',
        link: 'https://github.com/dmlc/xgboost',
      },
      {
        domain: 'Pose/action',
        task: 'Guided checks (if used)',
        model: 'MediaPipe',
        link: 'https://github.com/google/mediapipe',
        note: 'if used for guided checks, not diagnosis',
      },
    ],
    deployment: {
      cpu: true,
      gpu: false,
      edge: false,
      offline: false,
      notes: 'Imaging gateway invoked only on escalation',
    },
    limitations: [
      'Not stroke diagnosis',
      'Not seizure diagnosis',
      'Strict escalation rules prioritized over minimizing tests when uncertain',
    ],
    exampleOutputs: [
      '"High risk pattern. Escalate to urgent evaluation."',
      '"Uncertain history. Abstain. Recommend evaluation."',
    ],
  },
  {
    id: 'test-ordering-optimization',
    code: 'SVC-10',
    title: 'Test Ordering Optimization Layer',
    summary: 'A meta-service that reduces broad panels by converting symptoms into a minimal, protocol-aligned test pathway with auditable rationale.',
    inputs: [
      { name: 'Engine Outputs' },
      { name: 'Clinic Protocols' },
      { name: 'Constraints (cost/time)' },
    ],
    primaryMode: 'MINIMAL PANEL',
    statusLabel: 'PILOT',
    images: {
      hero: '/services/svc10-hero.svg',
      diagram: '/services/svc10-diagram.svg',
    },
    sections: [
      {
        id: 'problem',
        title: 'Problem',
        content: 'Even with good triage, ordering behavior remains inconsistent. Clinicians often order broad panels because it is faster than reasoning through minimal pathways under time pressure.',
      },
      {
        id: 'reduces',
        title: 'What it reduces',
        content: [
          'Broad "shotgun" panels',
          'Duplicate tests across visits',
          'Protocol drift',
        ],
        type: 'list',
      },
      {
        id: 'inputs',
        title: 'Inputs',
        content: [
          'Outputs from SVC-01 to SVC-09',
          'Local protocol rules (configurable)',
          'Patient constraints (cost sensitivity, access)',
        ],
        type: 'list',
      },
      {
        id: 'how-it-works',
        title: 'How it works (core concept)',
        content: 'This layer does not detect disease. It converts risk bands into a **minimal test plan** that is: protocol-aligned, auditable, configurable per clinic, reversible by clinician override.',
      },
      {
        id: 'outputs',
        title: 'Outputs',
        content: [
          'Minimal next test category',
          'Rationale notes (short, structured)',
          'Confidence and abstain notes',
          '"Stop conditions" (when to escalate)',
        ],
        type: 'list',
      },
      {
        id: 'abstain',
        title: 'Abstain conditions',
        content: [
          'No protocol configuration present',
          'Conflicting engine outputs',
          'Missing constraint inputs',
        ],
        type: 'list',
      },
    ],
    modelLinks: [
      {
        domain: 'Decision logic',
        task: 'Ranking',
        model: 'scikit-learn',
        link: 'https://github.com/scikit-learn/scikit-learn',
      },
      {
        domain: 'Tabular ranking',
        task: 'Baseline',
        model: 'LightGBM',
        link: 'https://github.com/microsoft/LightGBM',
      },
      {
        domain: 'Constraint logic',
        task: 'Optional',
        model: 'OR-Tools',
        link: 'https://github.com/google/or-tools',
      },
    ],
    deployment: {
      cpu: true,
      gpu: false,
      edge: false,
      offline: false,
      notes: 'Exports a printable "minimal plan" for clinician sign-off',
    },
    limitations: [
      'Not clinical advice',
      'Protocol-dependent',
      'Must be configured and validated per deployment',
    ],
    exampleOutputs: [
      '"Minimal plan: monitor + targeted check. Broad panel not recommended unless new red flags appear."',
      '"Protocol missing. Abstain. Recommend clinician decision."',
    ],
  },
];

