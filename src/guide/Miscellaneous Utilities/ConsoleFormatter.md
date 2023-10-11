---
title: ConsoleFormatter
icon: circle-info
---

'ConsoleFormatter' is a small utility to print messages to a Terminal from PyToolkit, this will enable colored messages on Unix-like systems, with a great amount of the testing for it having been done in Linux. Currently the colors are hard-coded.y

## class ConsoleFormatter

### init()

Initialized the class and defines the available colors.

#### Currently available colors:

- "HEADER":'\033[95m',
- "OKBLUE": '\033[94m',
- "OKGREEN": '\033[92m',
- "WARNING": '\033[93m',
- "FAIL": '\033[91m',
- "ENDC": '\033[0m'

### format()

Text formatter, properties are as previously explained.

#### Parameters

- text(str): Text to be formatted
- format(str): Format that represents the color to be formatted, as previously stated, these colors are hard-coded.