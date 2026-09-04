# -*- coding: utf-8 -*-
"""Shared core for SNBT PM bank generator.

Options are auto-arranged so the correct answer lands on key
'ABCD'[global_index % 4]. With a multiple-of-4 count this gives a
perfectly even A/B/C/D distribution (150 -> 38/38/37/37).
"""
PROBLEMS = []
_SEQ = "ABCD"

def add(text, correct, distractors, expl, stim=None):
    """Register one problem.
    text: full prompt string.
    correct: the correct answer text.
    distractors: list of 3 wrong-but-plausible option texts.
    expl: list of lines; each line = list of (kind, text), kind in {'P','B'}.
    stim: optional list of stimulus paragraphs.
    """
    assert len(distractors) == 3, (text, distractors)
    assert len({c.strip() for c in distractors} | {correct.strip()}) == 4, (
        "duplicate option", text, correct, distractors)
    idx = len(PROBLEMS)
    key = _SEQ[idx % 4]
    options = [None, None, None, None]
    options["ABCD".index(key)] = correct
    di = 0
    for k in range(4):
        if options[k] is None:
            options[k] = distractors[di]
            di += 1
    assert isinstance(expl, list) and expl, ("expl required", text)
    PROBLEMS.append({
        "no": idx + 1,
        "t": text,
        "opts": options,
        "key": key,
        "expl": expl,
        "stim": stim or [],
    })
