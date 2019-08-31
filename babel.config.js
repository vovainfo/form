const presets = [
    [
        "@babel/env",
        {
            targets: { // ������ ��������� ������� ����� ������������
                edge: "17",
                firefox: "60",
                chrome: "64",
                safari: "11.1",
            },
            useBuiltIns: "usage", // ��� ��������� babel-polyfill, ���� ����� �������� usage, �� ����� ������������ �������� ��� ������ ��������� ������� ������� ����.
            corejs: "3.0.0", // ���� ���������� ������ corejs
                     "targets": { // ������� ����, ��� ���������
                            "esmodules": true, // es ������ 
                             "ie": "11" // Internet Expolrer 11
                 }
        },
    ],
];

module.exports = { presets };