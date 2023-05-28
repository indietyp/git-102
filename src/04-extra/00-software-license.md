# Software Licensing

There are many different software licenses. The most common ones are:

* [MIT License](https://opensource.org/licenses/MIT)
* [BSD License](https://opensource.org/licenses/BSD-3-Clause)
* [Apache License](https://www.apache.org/licenses/LICENSE-2.0)
* [GNU General Public License](https://www.gnu.org/licenses/gpl-3.0.en.html)
* [GNU Lesser General Public License](https://www.gnu.org/licenses/lgpl-3.0.en.html)
* [GNU Affero General Public License](https://www.gnu.org/licenses/agpl-3.0.en.html)
* [Mozilla Public License](https://www.mozilla.org/en-US/MPL/2.0/)
* [Creative Commons](https://creativecommons.org/licenses/)

Licenses can be divided into content licenses and software licenses. Content licenses are used for things like images,
text and data. If your project has both content and software, you should use two different licenses.

A common example is the [Creative Commons](https://creativecommons.org/licenses/) license. This license is designed for
content, but it is not designed for software.

This is why the content of this book is licensed under [CC0](https://creativecommons.org/publicdomain/zero/1.0/), while
the code is dual-licensed under the [MIT License](https://opensource.org/licenses/MIT)
and [Apache License](https://www.apache.org/licenses/LICENSE-2.0).

Some of these licenses are permissive, others are copyleft. Permissive licenses allow you to do almost anything with the
software, including using it in proprietary software. Copyleft licenses require that any software that uses the software
must also be licensed under the same license.

You can find a more detailed explanation of the different licenses [here](https://choosealicense.com/licenses/). You
should choose a license that is approved by the [Open Source Initiative](https://opensource.org/licenses/alphabetical).
Some licenses are not approved by the OSI, but are still Open Source licenses, like [unlicense](https://unlicense.org/).
For software related projects you should stay clear from them.

You should choose the license of your project as soon as possible. If you do not choose a license then it is not clear
what people can do with your software. This can lead to people not using your software because they are not sure if they
are allowed to use it. If you do not choose a license,
then [all rights are reserved](https://choosealicense.com/no-permission/) will be applied by default. This means that no
one is allowed to use your software. Even though you might have open sourced it, it isn't Open Source Software.

The most common copyleft license is the [GNU General Public License](https://www.gnu.org/licenses/gpl-3.0.en.html) (
GPL). Be aware that if you use a GPL library in your project, then your project must also be licensed under the GPL.
This means that you can not use GPL libraries in proprietary software.

> This also applies to binaries, if you include a GPL binary in your git repository, then your repository must also be
> licensed under the GPL!
>
> Especially for GPL it can be useful to look at the [FAQ](https://www.gnu.org/licenses/gpl-faq.en.html) and
> the [How to use GNU licenses for your own software](https://www.gnu.org/licenses/gpl-howto.en.html) guide.

Libraries in programming languages often have a license that is compatible with the license of the programming language.
For example, the [Rust programming language](https://www.rust-lang.org/) is dual-licensed under the MIT License and the
Apache License. Most libraries are also dual-licensed.
