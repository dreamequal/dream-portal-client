import React, { useState } from "react";

import Wizard, { Step } from "../../../components/general/Wizard/Wizard";

const PoliciesWizard = ({
    onComplete,
    onClose,
}) => {
    const [step, setStep] = useState(0);

    return (
        <Wizard
            title="Terms & Conditions"
            step={step}
            onStep={() => setStep(step + 1)}
            onComplete={onComplete}
            onClose={onClose}
        >
            <Step title="Safety and Security Policy">
                <p>
                    Please read DREAM EQUAL, Inc.'s official Safety and Security Policy located&nbsp;
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://dream-portal-documents.s3-us-west-1.amazonaws.com/Safety+and+Security+Policy.pdf"
                    >
                        here
                    </a>.
                </p>
                <div class="custom-control custom-radio">
                    <input
                        type="radio"
                        id="minor-select-adult"
                        name="minorSelect"
                        class="custom-control-input"
                    />
                    <label class="custom-control-label" htmlFor="minor-select-adult">
                        <strong>I am not a minor</strong> and I have read through the entire DREAM EQUAL
                        Safety and Security policy and agree to follow the terms outlined.
                    </label>
                </div>
                <div class="custom-control custom-radio">
                    <input
                        type="radio"
                        id="minor-select-minor"
                        name="minorSelect"
                        class="custom-control-input"
                    />
                    <label class="custom-control-label" htmlFor="minor-select-minor">
                        <strong>I am a minor</strong> and I have read through the entire DREAM EQUAL safety and
                        security policy and I agree to follow the terms outlined in it.
                        I will also have my parent(s)/guardian(s) read and agree to the
                        DREAM EQUAL Safety and Security policy.
                    </label>
                </div>
            </Step>
            <Step title="Safety and Security Policy (ctd.)">
                <div class="mb-4">
                    <textarea
                        class="form-control"
                        rows="4"
                        resize="none"
                        readOnly
                        value="I fully recognize the dangers and risks to which myself (the parent/guardian) and
                        my minor child (below the legal age of majority in the country/state my child
                        resides in) may be exposed to by participating in any DREAM EQUAL programs,
                        meetings, or activities. I understand that DREAM EQUAL does not require my minor
                        child or me to participate in this activity. With informed consent, and for
                        valuable consideration received, I agree to assume and take on myself all of
                        the risks and responsibilities in any way arising from or associated with my child’s
                        or my participation in this activity, and I release DREAM EQUAL and all of its
                        affiliates/partners, from any and all claims, demands, suits, judgments, damages,
                        actions and liabilities of every name and nature whatsoever, whenever occurring,
                        whether known or unknown, contingent or fixed, at law or in equity, that I or my
                        child may suffer at any time arising from or in connection with this trip, including
                        any injury or harm to myself/my child, her/his/their death, or damage to her/his/their
                        or my property, known as “Liabilities”, and I agree to defend, indemnify, and hold
                        DREAM EQUAL and all of its affiliates/partners harmless from and against any and all
                        liabilities. I recognize that this Release means I, and my child, are giving up,
                        among other things, all rights to sue DREAM EQUAL and all of its affiliates/partners
                        for injuries, wrongful death, damages or losses that may be incurred. I also understand
                        that this Release binds my heirs, executors, administrators, legal representatives and
                        assigns, as well as myself. I also affirm that I have adequate medical or health insurance
                        or sufficient financial means to cover any medical assistance I or my minor child may
                        require. I agree that this Release shall be governed for all purposes by federal law,
                        without regard to its choice of law provisions."
                    ></textarea>
                    <div class="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            id="minor-agree-first"
                            name="minorAgree"
                            class="custom-control-input"
                        />
                        <label class="custom-control-label" htmlFor="minor-agree-first">
                            I have read and agree to the terms above
                        </label>
                    </div>
                </div>

                <div class="mb-4">
                    <textarea
                        class="form-control"
                        rows="4"
                        resize="none"
                        readOnly
                        value="For minor participants: I grant permission for my minor child to participate in DREAM EQUAL
                        programs, meetings and activities. I understand that official DREAM EQUAL representatives
                        will not be in attendance for most DREAM EQUAL meetings or activities, and that DREAM
                        EQUAL activities with people under the legal age of majority in the state/country they
                        reside are encouraged to be supervised by a trusted adult advisor. I fully understand that
                        my minor child will be solely responsible for their travel to/from DREAM EQUAL meetings and
                        activities and that my minor child will be solely responsible for their own general wellbeing
                        throughout programming."
                    ></textarea>
                    <div class="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            id="minor-agree-second"
                            name="minorAgree"
                            class="custom-control-input"
                        />
                        <label class="custom-control-label" htmlFor="minor-agree-second">
                            I have read and agree to the terms above
                        </label>
                    </div>
                </div>
            </Step>
            <Step title="Privacy & Internet Safety Policies">
                <div>
                    <p>
                        Please read DREAM EQUAL, Inc.'s official Privacy Policy located&nbsp;
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://dream-portal-documents.s3-us-west-1.amazonaws.com/Privacy+Policy.pdf"
                        >
                            here
                        </a>.
                    </p>
                    <div class="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            id="minor-agree-second"
                            name="minorAgree"
                            class="custom-control-input"
                        />
                        <label class="custom-control-label" htmlFor="minor-agree-second">
                            I have read through, understand, and have no problems with DREAM EQUAL's Privacy Policy.
                        </label>
                    </div>
                </div>
                <div class="mt-5">
                    <p>
                        Please read DREAM EQUAL, Inc.'s official Internet Safety Policy located&nbsp;
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://dream-portal-documents.s3-us-west-1.amazonaws.com/Internet+Safety+%26+Security+Agreement.pdf"
                        >
                            here
                        </a>.
                    </p>
                    <div class="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            id="minor-agree-second"
                            name="minorAgree"
                            class="custom-control-input"
                        />
                        <label class="custom-control-label" htmlFor="minor-agree-second">
                            I have read through the Internet Safety & Security Agreement and I agree to follow the terms outlined in it. 
                        </label>
                    </div>
                </div>
            </Step>
        </Wizard>
    )
}

export default PoliciesWizard;